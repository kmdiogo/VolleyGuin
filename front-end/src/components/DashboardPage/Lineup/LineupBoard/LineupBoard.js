import React, {useState} from "react";
import {
    Box,
    Grid
} from "@material-ui/core"
import LineupSlot from "./LineupSlot/LineupSlot";
import DraggablePlayerCard from "./DraggablePlayerCard/DraggablePlayerCard";
import update from 'immutability-helper'

function LineupBoard() {
    const [players, setPlayers] = useState([
        {firstName: 'John', lastName: 'Doe', position: 'Loser'},
        {firstName: 'Nick', lastName: 'Petho', position: 'Cool Guy'}
    ])

    const [slots, setSlots] = useState([null, null, null, null, null, null])

    function handleDrop(position, player) {
        const updatedSlots = update(slots, { $splice: [[position, 1, player]] })
        setSlots(updatedSlots)
    }

    return (
        <React.Fragment>
            <Box mb={5}>
                <Grid container spacing={3}>
                    {
                        players.map(player => (
                            <Grid item xs={4}>
                                <DraggablePlayerCard player={player} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Grid container spacing={3}>
                {
                    slots.map((player, i) => (
                        <LineupSlot position={i} onDrop={handleDrop} player={player} />
                    ))
                }
            </Grid>
        </React.Fragment>

    )
}

export default LineupBoard
