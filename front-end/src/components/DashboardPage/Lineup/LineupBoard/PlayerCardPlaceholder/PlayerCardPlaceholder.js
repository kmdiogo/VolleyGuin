import React from "react";
import {
    Avatar,
    Box,
    Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}))

function PlayerCardPlaceholder(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" mb={2}>
                <Avatar className={classes.avatar} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography gutterBottom variant="h5" component="h2">
                    Empty Slot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Drag a player here
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default PlayerCardPlaceholder
