import React from "react";
import {
    Grid,
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { useDrop } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";

function LineupSlot(props) {
    const { onDrop, position, player } = props
    const [{ isOver }, drop] = useDrop({
        accept: DndItemTypes.PLAYER_CARD,
        drop: (dragItem) => {
            onDrop({
                dropPosition: position,
                player: dragItem.player,
                dragPosition: dragItem.dragPosition,
            })
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <Grid item xs={4} ref={drop}>
            <DraggablePlayerCard player={player} position={position} />
        </Grid>
    )
}

LineupSlot.propTypes = {
    position: PropTypes.number.isRequired,
    onDrop: PropTypes.func.isRequired,
    player: PropTypes.object,
}

export default LineupSlot
