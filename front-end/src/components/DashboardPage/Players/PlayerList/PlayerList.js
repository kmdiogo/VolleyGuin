import React, {useState} from "react";
import PlayerListItem from "./PlayerListItem/PlayerListItem";
import {Box, List} from "@material-ui/core";

const players = [
    'Kenneth Diogo',
    'Noah GW',
    'Dominic Eorio',
    'Matt Hone',
    'Nick Petho'
]

function PlayerList() {
    const [activePlayer, setActivePlayer] = useState('')
    function handleChange(player) {
        if (player === activePlayer) {
            setActivePlayer('')
        } else {
            setActivePlayer(player)
        }
    }

    return (
        <List>
            {
                players.map(player => (
                    <PlayerListItem />
                ))
            }
        </List>
    )
}

export default PlayerList
