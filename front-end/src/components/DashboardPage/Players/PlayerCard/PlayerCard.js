import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
} from "@material-ui/core"
import PropTypes from 'prop-types'
import PlayerCardContents from "./PlayerCardContents/PlayerCardContents";

function PlayerCard(props) {
    const { player, onClick, elevation, avatar } = props

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

PlayerCard.defaultProps = {
    onClick: () => {},
}

export default PlayerCard
