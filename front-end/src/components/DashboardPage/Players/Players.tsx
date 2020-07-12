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
import {Player} from "../../../types";

function Players() {
    const [editPlayer, setEditPlayer] = useState(undefined as Player | undefined)
    function handlePlayerClick(player: Player) {
        setEditPlayer(player)
    }

    function handleDialogClose() {
        setEditPlayer(undefined)
    }

    function searchByFullName(item: Player) {
        return `${item.firstName} ${item.lastName}`
    }

    const playerGridItems = db_players.map(player => ({
        ...player,
        component: <PlayerCard player={player} onClick={handlePlayerClick} avatar={player.avatar} />
    }))

    return (
        <Box>
            <ItemGrid<Player> items={playerGridItems} colsPerItem={4} sortBy={"lastName"} searchBy={[searchByFullName]} />
            <PlayerDialog player={editPlayer} onClose={handleDialogClose} />
            <PrimaryActionFab icon={<AddIcon />} />
        </Box>
    );
}

export default Players;
