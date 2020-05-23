import React from "react";
import {
    Grid,
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { useDrop } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";
import PlayerPlaceholder from "../PlayerPlaceholder/PlayerPlaceholder";

function LineupSlot(props) {
    const { onDrop, position, player } = props
    const [{ isOver }, drop] = useDrop({
        accept: DndItemTypes.PLAYER_CARD,
        drop: (dragItem) => {
            onDrop(position, dragItem.player)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (
        <Grid item xs={4} ref={drop}
              style={{
                  border: isOver ? 'solid 1px green' : null
              }}
        >
            {
                !player ? <PlayerPlaceholder /> : <DraggablePlayerCard player={player} />
            }
        </Grid>
    )
}

LineupSlot.propTypes = {
    position: PropTypes.number.isRequired,
    onDrop: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
}

export default LineupSlot
