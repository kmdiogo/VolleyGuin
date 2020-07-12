import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
} from "@material-ui/core"
import PropTypes from 'prop-types'
import PlayerCardContents from "./PlayerCardContents/PlayerCardContents";
import {Player} from "../../../../types";

type Props = {
    player: Player,
    onClick?: (player: Player) => void,
    elevation?: number,
    avatar?: string
}

function PlayerCard({ player, onClick = () => {}, elevation, avatar }: Props) {
    return (
        <Card elevation={elevation}>
            <CardActionArea onClick={() => {onClick(player)}}>
                <CardContent>
                    <PlayerCardContents player={player} avatar={avatar} />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    elevation: PropTypes.number,
    avatar: PropTypes.string
}

export default PlayerCard
