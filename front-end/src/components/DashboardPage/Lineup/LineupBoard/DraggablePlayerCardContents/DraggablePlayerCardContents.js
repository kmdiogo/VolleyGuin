import React from "react";
import {Avatar, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    }
}))

function DraggablePlayerCardContents(props) {
    const { player } = props
    const classes = useStyles()
    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" mb={2}>
                <Avatar className={classes.avatar} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant="body2" color="textSecondary" component="p">
                    { player.firstName } { player.lastName }
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default DraggablePlayerCardContents
