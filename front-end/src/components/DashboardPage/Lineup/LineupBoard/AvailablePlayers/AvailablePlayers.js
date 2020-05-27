import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import DraggableCard from "../DraggablePlayerCard/DraggablePlayerCard";
import {useDrop} from "react-dnd";
import DndItemTypes from "../../../../../constants/DndItemTypes";

function AvailablePlayers(props) {
    const { onDrop } = props
    const [{ isOver }, drop] = useDrop({
        accept: DndItemTypes.PLAYER_CARD,
        drop: (dragItem) => {
            onDrop({
                player: dragItem.player,
                dragPosition: dragItem.dragPosition,
            })
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const style = {
        border: isOver ? '1px solid green' : null,
        minHeight: '100px'
    }
    return (
        <div style={style} ref={drop}>
            <Box mb={1}>
                <Typography variant="h5">Available Players</Typography>
            </Box>
            <Box mb={5}>
                <Grid container spacing={3}>
                    {
                        props.players.map((player, i) => (
                            <Grid item xs={2} key={i}>
                                <DraggableCard player={player} position={-1} avatarSize={5} mini/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </div>
    )
}

AvailablePlayers.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onDrop: PropTypes.func.isRequired
};

export default AvailablePlayers
