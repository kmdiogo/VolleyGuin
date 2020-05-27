import React from "react";
import PropTypes from 'prop-types'
import {
    Card,
    CardContent
} from "@material-ui/core"
import { useDrag } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import DraggablePlayerCardContents from "./DraggablePlayerCardContents/DraggablePlayerCardContents";


function DraggablePlayerCard(props) {
    const { player, position, variant, mini } = props
    const [{isDragging}, drag] = useDrag({
        item: {
            type: DndItemTypes.PLAYER_CARD,
            player,
            dragPosition: position
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const style = {
        cursor: player ? 'grab' : null
    }

    return (
        <Card ref={!!player ? drag : null} elevation={5} variant={isDragging ? "outlined" : variant} style={style}>
            <CardContent>
                {
                    !!player ? (
                        <DraggablePlayerCardContents player={player} mini={mini} />
                    ) : (
                        <DraggablePlayerCardContents player={null} />
                    )
                }
            </CardContent>
        </Card>
    )
}

DraggablePlayerCard.propTypes = {
    player: PropTypes.object,
    position: PropTypes.number.isRequired,
    variant: PropTypes.string,
    mini: PropTypes.bool
}

DraggablePlayerCard.defaultProps = {
    mini: false
}

export default DraggablePlayerCard
