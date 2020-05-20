import React from "react";
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from "@material-ui/core"

function PlayerListItem() {

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText primary="Kenneth Diogo" />
        </ListItem>
    )
}

export default PlayerListItem
