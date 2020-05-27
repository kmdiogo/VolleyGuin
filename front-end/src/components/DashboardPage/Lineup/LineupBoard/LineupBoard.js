import React, {useState} from "react";
import {
    Box,
    Divider,
    Grid,
    Typography
} from "@material-ui/core"
import LineupSlot from "./LineupSlot/LineupSlot";
import DraggableCard from "./DraggablePlayerCard/DraggablePlayerCard";
import update from 'immutability-helper'
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

function LineupBoard() {
    const [players, setPlayers] = useState([
        {firstName: 'John', lastName: 'Doe', position: 'Loser'},
        {firstName: 'Nick', lastName: 'Petho', position: 'Cool Guy'},
        {firstName: 'Ur', lastName: 'Mum', position: 'Gey'},
        {firstName: 'Yah', lastName: 'Yeet', position: ':)'},
        {firstName: 'Mikulas', lastName: 'Petho', position: 'Cool Guy'}
    ].map((p, i) => ({...p, index: i})))
    const [slots, setSlots] = useState([null, null, null, null, null, null])
    const [usedPlayers, setUsedPlayers] = useState(new Set())

    function handleDrop({ dropPosition, player, dragPosition }) {
        const usedPlayersUpdated = new Set(usedPlayers)
        // Remove replaced player from used set if the drop replaces an existing one
        if (slots[dropPosition] != null) {
            usedPlayersUpdated.delete(slots[dropPosition])
        }

        const updatedSlots = update(slots, { $splice: [[dropPosition, 1, player.index]] })
        // Check if player card moved from lineup
        if (dragPosition >= 0) {
            updatedSlots[dragPosition] = null
        } else {
            usedPlayersUpdated.add(player.index)
        }

        setUsedPlayers(usedPlayersUpdated)
        setSlots(updatedSlots)
    }

    function handleAvailDrop({ player, dragPosition }) {
        // Update used player set
        const usedPlayersUpdated = new Set(usedPlayers)
        usedPlayersUpdated.delete(player.index)
        const updatedSlots = update(slots, { $splice: [[dragPosition, 1, null]] })

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
                    slots.map((playerIndex, i) => (
                        <LineupSlot position={i} onDrop={handleDrop} player={players[playerIndex]} key={i}/>
                    ))
                }
            </Grid>
        </React.Fragment>

    )
}

export default LineupBoard
