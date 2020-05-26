import React from "react";
import {
    Avatar,
    Box,
    Typography
} from "@material-ui/core"
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    avatar: props => ({
        width: theme.spacing(props.avatarSize),
        height: theme.spacing(props.avatarSize)
    })
}))

function PlayerCardContents(props) {
    const { player, avatarSize } = props
    const classes = useStyles({avatarSize})

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
    avatarSize: PropTypes.number
}

PlayerCardContents.defaultProps = {
    avatarSize: 10
}

export default PlayerCardContents
