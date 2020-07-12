import React from "react";
import PropTypes from 'prop-types'
import {
    Card,
    CardContent
} from "@material-ui/core"
import { useDrag } from "react-dnd";
import DraggablePlayerCardContents from "./DraggablePlayerCardContents/DraggablePlayerCardContents";
import {DndPlayerCardDragObject, LineupPlayer, DndType} from "../../../../../types";

type Props = {
    player?: LineupPlayer,
    position: number,
    variant?: 'outlined' | 'elevation' | undefined,
    mini?: boolean
}

function DraggablePlayerCard(props: Props) {
    const { player, position, variant, mini=false } = props
    const dragObj: DndPlayerCardDragObject = {
        type: DndType.PLAYER_CARD,
        player,
        dragPosition: position
    }
    const [{isDragging}, drag] = useDrag({
        item: dragObj,
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const style = {
        cursor: player ? 'grab' : undefined
    }

    return (
        <Card ref={!!player ? drag : null} elevation={5} variant={isDragging ? "outlined" : variant} style={style}>
            <CardContent>
                {
                    /*!!player ? (
                        <DraggablePlayerCardContents player={player} mini={mini} />
                    ) : (
                        <DraggablePlayerCardContents player={null} />
                    )*/
                    <DraggablePlayerCardContents player={player} mini={mini} position={position} />
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

export default DraggablePlayerCard
