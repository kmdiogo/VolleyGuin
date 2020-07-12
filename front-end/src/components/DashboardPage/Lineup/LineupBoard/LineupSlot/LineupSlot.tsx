import React from "react";
import {
    Grid,
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { useDrop } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";
import {DndPlayerCardDragObject, LineupPlayer} from "../../../../../types";

export type onDropPayload = {
    dropPosition: number,
    player?: LineupPlayer,
    dragPosition: number
}

type Props = {
    player?: LineupPlayer
    onDrop: (payload: onDropPayload) => void
    position: number
}

function LineupSlot({ onDrop, position, player }: Props) {
    const [{ isOver }, drop] = useDrop({
        accept: DndItemTypes.PLAYER_CARD,
        drop: (dragItem: DndPlayerCardDragObject) => {
            onDrop({
                dropPosition: position,
                player: dragItem.player,
                dragPosition: dragItem.dragPosition,
            })
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    })

    return (
        <Grid item xs={4} ref={drop}>
            <DraggablePlayerCard player={player} position={position} variant={isOver ? "outlined" : undefined} />
        </Grid>
    )
}

LineupSlot.propTypes = {
    position: PropTypes.number.isRequired,
    onDrop: PropTypes.func.isRequired,
    player: PropTypes.object,
}

export default LineupSlot
