import React from "react";
import {
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    Avatar,
    Button,
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

function PlayerCard(props) {
    const { player } = props
    const classes = useStyles()

    return (
        <Card>
            <CardActionArea>
                <CardContent>
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
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayerCard
