import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";
import {useDrop} from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import {DndPlayerCardDragObject, LineupPlayer} from "../../../../../types";

export type onDropPayload = {
    player?: LineupPlayer
    dragPosition: number
}
type Props = {
    players: LineupPlayer[]
    onDrop: (payload: onDropPayload) => void
}

function AvailablePlayers({ players, onDrop }: Props) {
    const [{ isOver }, drop] = useDrop({
        accept: DndItemTypes.PLAYER_CARD,
        drop: (dragItem: DndPlayerCardDragObject) => {
            onDrop({
                player: dragItem.player,
                dragPosition: dragItem.dragPosition,
            })
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    })

    const style = {
        border: isOver ? '1px solid green' : undefined,
        minHeight: '100px'
    }
    return (
        <div style={style} ref={drop}>
            <Box mb={1}>
                <Typography variant="h5">Available Players</Typography>
            </Box>
            <Box mb={5}>
                <Grid container spacing={3}>
                    {
                        players.map((player, i: number) => (
                            <Grid item xs={2} key={i}>
                                <DraggablePlayerCard player={player} position={-1} mini/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

AvailablePlayers.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onDrop: PropTypes.func.isRequired
};

export default AvailablePlayers
