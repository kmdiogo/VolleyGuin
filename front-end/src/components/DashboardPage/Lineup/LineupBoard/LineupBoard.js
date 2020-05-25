import React, {useState} from "react";
import {
    Box,
    Grid
} from "@material-ui/core"
import LineupSlot from "./LineupSlot/LineupSlot";
import DraggableCard from "./DraggablePlayerCard/DraggablePlayerCard";
import update from 'immutability-helper'

function LineupBoard() {
    const [players, setPlayers] = useState([
        {firstName: 'John', lastName: 'Doe', position: 'Loser'},
        {firstName: 'Nick', lastName: 'Petho', position: 'Cool Guy'}
    ].map((p, i) => ({...p, index: i})))
    const [slots, setSlots] = useState([null, null, null, null, null, null])
    const [usedPlayers, setUsedPlayers] = useState(new Set())

    function handleDrop({ dropPosition, player, lastPosition }) {
        const updatedSlots = update(slots, { $splice: [[dropPosition, 1, player.index]] })

        // Check if player card moved from lineup
        if (lastPosition >= 0) {
            updatedSlots[lastPosition] = null
        } else {
            const usedPlayersUpdated = new Set(usedPlayers)
            usedPlayers.add(player.index)
            setUsedPlayers(usedPlayersUpdated)
        }
        setSlots(updatedSlots)
    }

    return (
        <React.Fragment>
            <Box mb={5}>
                <Grid container spacing={3}>
                    {
                        players.map((player, i) => {
                            if (usedPlayers.has(i)) return;
                            return (
                                <Grid item xs={4} key={i}>
                                    <DraggableCard player={player} position={-1} playerIndex={i} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Grid container spacing={3}>
                {
                    slots.map((playerIndex, i) => (
                        <LineupSlot position={i} onDrop={handleDrop} player={!!playerIndex ? players[playerIndex] : null} key={i} />
                    ))
                }
            </Grid>
        </React.Fragment>

    )
}

export default LineupBoard
