import React, {useState} from "react";
import {Avatar, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types'
import {LineupPlayer} from "../../../../../../types";

type Props = {
    mini?: boolean,
    position: number,
    player?: LineupPlayer
}

type useStyleProps = {
    avatarSize: number
}

const useStyles = makeStyles(theme => ({
    avatar: (props: useStyleProps) => ({
        width: theme.spacing(props.avatarSize),
        height: theme.spacing(props.avatarSize)
    })
}))

// TODO: make this mapping more generic (to maybe support other sports? Not really a priority.)
// used to map array indices on a grid to their respective volleyball position
const positionMapping = ['IV', 'III', 'II', 'V', 'VI', 'I']
function DraggablePlayerCardContents({ player, mini, position }: Props) {
    const styleProps: useStyleProps = {
        avatarSize: mini ? 5 : 10
    }
    const classes = useStyles(styleProps)
    const name = player ? `${player.firstName} ${player.lastName}` : 'Empty Slot'
    const initials = player ? `${player.firstName[0]}${player.lastName[0]}` : null

    const contentsNoPlayer = (
        <Box display="flex" justifyContent="center" mb={2}>
            <Typography variant="h1" color="textSecondary">
                { positionMapping[position] }
            </Typography>
        </Box>
    )
    const contentsWithPlayer = (
        <React.Fragment>
            <Box display="flex" justifyContent="center" mb={2}>
                <Box mr="auto">
                    <Typography variant="body1">
                        { positionMapping[position] }
                    </Typography>
                </Box>
                <Box mr="auto">
                    <Avatar className={classes.avatar} src={player && player.avatar}>
                        {initials}
                    </Avatar>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant={mini ? 'body2' : 'h5'} color="textSecondary" component="p">
                    {name}
                </Typography>
            </Box>
        </React.Fragment>
    )

    return !player ? contentsNoPlayer : contentsWithPlayer
}

DraggablePlayerCardContents.propTypes = {
    mini: PropTypes.bool,
    position: PropTypes.number,
    player: PropTypes.object
}

DraggablePlayerCardContents.defaultProps = {
    mini: false
}

export default DraggablePlayerCardContents
