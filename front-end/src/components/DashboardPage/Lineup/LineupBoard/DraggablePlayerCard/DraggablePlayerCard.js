import React from "react";
import PropTypes from 'prop-types'
import PlayerCard from "../../../Players/PlayerCard/PlayerCard";
import { useDrag } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import PlayerPlaceholder from "../PlayerPlaceholder/PlayerPlaceholder";

function DraggablePlayerCard(props) {
    const { player } = props
    const [{isDragging}, drag] = useDrag({
        item: { type: DndItemTypes.PLAYER_CARD, player },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <PlayerCard player={player} />
        </div>
    )
}

DraggablePlayerCard.propTypes = {
    player: PropTypes.object.isRequired,
}

export default DraggablePlayerCard
