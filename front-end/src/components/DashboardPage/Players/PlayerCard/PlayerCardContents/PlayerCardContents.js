import React from "react";
import {
    Avatar,
    Box,
    Typography
} from "@material-ui/core"
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}))

function PlayerCardContents(props) {
    const { player } = props
    const classes = useStyles()

    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" mb={2}>
                <Avatar className={classes.avatar} />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography gutterBottom variant="h5" component="h2">
                    { player.firstName } { player.lastName }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { player.position }
                </Typography>
            </Box>
        </React.Fragment>
    )
}

PlayerCardContents.propTypes = {
    player: PropTypes.object.isRequired,
}

export default PlayerCardContents
