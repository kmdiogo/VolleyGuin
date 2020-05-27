import React, {useState} from "react";
import {Avatar, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    avatar: props => ({
        width: theme.spacing(props.avatarSize),
        height: theme.spacing(props.avatarSize)
    })
}))

function DraggablePlayerCardContents(props) {
    const { player, mini } = props

    const classes = useStyles({avatarSize: mini ? 5 : 10})
    const name = player ? `${player.firstName} ${player.lastName}` : 'Empty Slot'
    const initials = player ? `${player.firstName[0]}${player.lastName[0]}` : null
    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" mb={2}>
                <Avatar className={classes.avatar}>
                    {initials}
                </Avatar>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant={mini ? 'body2' : 'h5'} color="textSecondary" component="p">
                    {name}
                </Typography>
            </Box>
        </React.Fragment>
    )
}

DraggablePlayerCardContents.propTypes = {
    mini: PropTypes.bool
}

DraggablePlayerCardContents.defaultProps = {
    mini: false
}

export default DraggablePlayerCardContents
