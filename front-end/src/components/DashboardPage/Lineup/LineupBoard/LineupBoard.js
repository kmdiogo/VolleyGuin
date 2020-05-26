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

    function handleDrop({ dropPosition, player, dragPosition }) {
        console.log(dropPosition, player, dragPosition)
        const updatedSlots = update(slots, { $splice: [[dropPosition, 1, player.index]] })

        // Check if player card moved from lineup
        if (dragPosition >= 0) {
            updatedSlots[dragPosition] = null
        } else {
            const usedPlayersUpdated = new Set(usedPlayers)
            usedPlayersUpdated.add(player.index)
            setUsedPlayers(usedPlayersUpdated)
        }
        console.log(updatedSlots)
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
                                    <DraggableCard player={player} position={-1} avatarSize={5} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Grid container spacing={3}>
                {
                    slots.map((playerIndex, i) => (
                        <LineupSlot position={i} onDrop={handleDrop} player={players[playerIndex]} key={i} />
                    ))
                }
            </Grid>
        </React.Fragment>

    )
}

export default LineupBoard
