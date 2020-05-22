import React, {forwardRef, useState} from 'react';
import AddIcon from "@material-ui/icons/Add"
import {
    Box,
} from "@material-ui/core"
import PlayerCard from "./PlayerCard/PlayerCard";
import PrimaryActionFab from "../../shared/PrimaryActionFab";
import ItemGrid from "../../material-utility/ItemGrid";
import PlayerDialog from "./PlayerDialog/PlayerDialog";

const players = [
    { firstName: 'Dom', lastName: 'Eorio', position: 'President' },
    { firstName: 'Matt', lastName: 'Hone', position: 'Vice President' },
    { firstName: 'Nick', lastName: 'Petho', position: 'Nerd' },
    { firstName: 'Luke', lastName: 'FromCafaro', position: 'CONST: fuck that bitch' }
]

function Players() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    function handlePlayerClick(player) {
        setIsDialogOpen(true)
    }

    function handleDialogClose() {
        setIsDialogOpen(false)
    }

    function searchByFullName(item) {
        return `${item.firstName} ${item.lastName}`
    }

    const playerGridItems = players.map(player => ({
        ...player,
        component: <PlayerCard player={player} onClick={handlePlayerClick} />
    }))

    return (
        <Box>
            <ItemGrid items={playerGridItems} colsPerItem={4} sortBy={'lastName'} searchBy={[searchByFullName]} />
            <PlayerDialog open={isDialogOpen} onClose={handleDialogClose} />
            <PrimaryActionFab icon={<AddIcon />} />
        </Box>
    );
}

export default Players;
