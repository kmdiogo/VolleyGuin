import React, {useState} from "react";
import {
    Box,
    Divider,
    Grid,
    Typography
} from "@material-ui/core"
import LineupSlot, * as lineupSlot from "./LineupSlot/LineupSlot";
import update from 'immutability-helper'
import AvailablePlayers, * as availablePlayers from "./AvailablePlayers/AvailablePlayers";
import {db_players} from "../../../../constants/mock-db";
import {LineupPlayer} from "../../../../types";

function LineupBoard() {
    const initialPlayers: LineupPlayer[] = db_players.map((p, i) => ({...p, index: i}))
    const [players, setPlayers] = useState(initialPlayers)

    const initialSlots: (number | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined]
    const [slots, setSlots] = useState(initialSlots)
    const [usedPlayers, setUsedPlayers] = useState(new Set())

    function handleDrop({ dropPosition, player, dragPosition }: lineupSlot.onDropPayload) {
        const usedPlayersUpdated = new Set(usedPlayers)
        // Remove replaced player from used set if the drop replaces an existing one
        if (slots[dropPosition] != null) {
            usedPlayersUpdated.delete(slots[dropPosition])
        }

        const updatedSlots = update(slots, { $splice: [[dropPosition, 1, player!.index]]})

        // Check if player card moved from lineup
        if (dragPosition >= 0) {
            updatedSlots[dragPosition] = undefined
        } else {
            usedPlayersUpdated.add(player!.index)
        }

        setUsedPlayers(usedPlayersUpdated)
        setSlots(updatedSlots)
    }

    function handleAvailDrop({ player, dragPosition }: availablePlayers.onDropPayload) {
        // Update used player set
        const usedPlayersUpdated = new Set(usedPlayers)
        usedPlayersUpdated.delete(player!.index)
        const updatedSlots = update(slots, { $splice: [[dragPosition, 1, undefined]] })

        setUsedPlayers(usedPlayersUpdated)
        setSlots(updatedSlots)
    }

    const availablePlayers = players.filter((_, i) => !usedPlayers.has(i))

    return (
        <React.Fragment>
            <AvailablePlayers players={availablePlayers} onDrop={handleAvailDrop} />
            <Box my={2}>
                <Divider/>
            </Box>
            <Box mb={1}>
                <Typography variant="h5">Lineup</Typography>
            </Box>
            <Grid container spacing={3}>
                {
                    slots.map((playerIndex, i) => {
                        let player
                        if (playerIndex != undefined) {
                            player = players[playerIndex]
                        }
                        return <LineupSlot position={i} onDrop={handleDrop} player={player} key={i}/>
                    })
                }
            </Grid>
        </React.Fragment>

    )
}

export default LineupBoard
