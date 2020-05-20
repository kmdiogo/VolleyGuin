import React from 'react';
import AddIcon from "@material-ui/icons/Add"
import {
    Box,
} from "@material-ui/core"
import PlayerCard from "./PlayerCard/PlayerCard";
import PrimaryActionFab from "../../shared/PrimaryActionFab";
import ItemGrid from "../../material-utility/ItemGrid";

const players = [
    { firstName: 'Dom', lastName: 'Eorio', position: 'President' },
    { firstName: 'Matt', lastName: 'Hone', position: 'Vice President' },
    { firstName: 'Nick', lastName: 'Petho', position: 'Nerd' },
    {firstName: 'Luke', lastName: 'FromCafaro', position: 'CONST: fuck that bitch'}
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

    const playerGridItems = players.map(player => ({
        ...player,
        component: <PlayerCard player={player} />
    }))

    return (
        <Box>
            <ItemGrid items={playerGridItems} colsPerItem={4} sortBy={'lastName'} searchBy={['firstName', 'lastName']} />
            <PrimaryActionFab icon={<AddIcon />} />
        </Box>
        /*<Grid container spacing={2}>
            {
                players.map(player => (
                    <Grid item xs={4}>
                        <PlayerCard player={player} />
                    </Grid>
                ))
            }

        </Grid>*/
        /*<Paper>
            <GridList>
                {
                    players.map(player => (
                        <GridListTile>
                            <PlayerCard player={player} />
                        </GridListTile>
                    ))
                }
            </GridList>
        </Paper>*/
    );
}

export default Players;
