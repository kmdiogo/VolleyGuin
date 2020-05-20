import React from "react";
import {
    Button,
    Divider,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Box,
    Avatar
} from "@material-ui/core";
import PropTypes from 'prop-types';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import PlayerListEntryForm from "./PlayerListEntryForm/PlayerListEntryForm";

function PlayerListEntry(props) {
    const { expanded, onChange, player } = props

    return (
        <ExpansionPanel expanded={expanded} onChange={() => {onChange(player)}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Box display="flex" alignItems="center">
                    <Box mr={3}>
                        <Avatar mr={5} />
                    </Box>
                    <Typography>{player}</Typography>
                </Box>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <PlayerListEntryForm />
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Button>Cancel</Button>
                <Button color="primary">Save</Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}

PlayerListEntry.propTypes = {
    expanded: PropTypes.bool,
    onChange: PropTypes.func,
    player: PropTypes.string.isRequired
}

export default PlayerListEntry
