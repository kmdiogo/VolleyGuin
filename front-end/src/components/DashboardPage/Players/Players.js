import React from 'react';
import AddIcon from "@material-ui/icons/Add"
import {
    Grid
} from "@material-ui/core"
import PlayerCard from "./PlayerCard/PlayerCard";
import PrimaryActionFab from "../../shared/PrimaryActionFab";

const players = [
    { firstName: 'Dom', lastName: 'Eorio', position: 'President' },
    { firstName: 'Matt', lastName: 'Hone', position: 'Vice President' },
    { firstName: 'Nick', lastName: 'Petho', position: 'Nerd' },
    {firstName: 'Luke', lastName: 'from Cafaro', position: 'CONST: fuck that bitch'}
]
function Players() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Y-Number', field: 'yNumber' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Email', field: 'email' },
            { title: 'Comment', field: 'comment' },
        ],
        data: [
            { yNumber: 'Y00766809', firstName: 'Kenneth', lastName: 'Diogo', email: 'kmdiogo@student.ysu.edu', comment: 'Awesome' },
            { yNumber: 'Y00766809', firstName: 'Mehmet', lastName: 'Baran', email: 'kmdiogo@student.ysu.edu', comment: 'Awesome' },
        ],
    });

    return (
        <Grid container spacing={2}>
            {
                players.map(player => (
                    <Grid item xs={4}>
                        <PlayerCard player={player} />
                    </Grid>
                ))
            }
            <PrimaryActionFab icon={<AddIcon />} />
        </Grid>
    );
}

export default Players;
