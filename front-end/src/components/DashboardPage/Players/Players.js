import React, {forwardRef, useState} from 'react';
import AddIcon from "@material-ui/icons/Add"
import {
    Box,
} from "@material-ui/core"
import PlayerCard from "./PlayerCard/PlayerCard";
import PrimaryActionFab from "../../shared/PrimaryActionFab";
import ItemGrid from "../../material-utility/ItemGrid";
import PlayerDialog from "./PlayerDialog/PlayerDialog";
import {db_players} from "../../../constants/mock-db";

function Players() {
    const [editPlayer, setEditPlayer] = useState(null)

    function handlePlayerClick(player) {
        setEditPlayer(player)
    }

    function handleDialogClose() {
        setEditPlayer(null)
    }

    function searchByFullName(item) {
        return `${item.firstName} ${item.lastName}`
    }

    const playerGridItems = db_players.map(player => ({
        ...player,
        component: <PlayerCard player={player} onClick={handlePlayerClick} avatar={player.avatar} />
    }))

    return (
        <Box>
            <ItemGrid items={playerGridItems} colsPerItem={4} sortBy={'lastName'} searchBy={[searchByFullName]} />
            <PlayerDialog player={editPlayer} onClose={handleDialogClose} />
            <PrimaryActionFab icon={<AddIcon />} />
        </Box>
    );
}

export default Players;
