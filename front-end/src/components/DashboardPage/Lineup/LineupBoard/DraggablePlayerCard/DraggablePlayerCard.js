import React from "react";
import PropTypes from 'prop-types'
import PlayerCard from "../../../Players/PlayerCard/PlayerCard";
import {
    Card,
    CardContent,
    CardActionArea
} from "@material-ui/core"
import { useDrag } from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";
import PlayerCardContents from "../../../Players/PlayerCard/PlayerCardContents/PlayerCardContents";
import PlayerCardPlaceholder from "../PlayerCardPlaceholder/PlayerCardPlaceholder";


function DraggablePlayerCard(props) {
    const { player, elevation, position } = props
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

    return (
        <Card ref={!!player ? drag : null}>
            <CardActionArea>
                <CardContent>
                    {
                        !!player ? (
                            <PlayerCardContents player={player} />
                        ) : (
                            <PlayerCardPlaceholder />
                        )
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

DraggablePlayerCard.propTypes = {
    player: PropTypes.object,
    position: PropTypes.number.isRequired,
    elevation: PropTypes.number,
}

export default DraggablePlayerCard
