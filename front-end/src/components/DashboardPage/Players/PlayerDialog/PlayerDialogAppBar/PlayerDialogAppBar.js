import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from 'prop-types'

function PlayerDialogAppBar(props) {
    const { onClose } = props

    return (
        <AppBar style={{position: 'relative'}}>
            <Toolbar>
                <Box display="flex" alignItems="center" width="100%">
                    <IconButton edge="start" color="inherit" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Player
                    </Typography>
                    <Box ml="auto">
                        {/*<Button autoFocus color="inherit" onClick={onClose}>
                            Save
                        </Button>*/}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

PlayerDialogAppBar.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default PlayerDialogAppBar
