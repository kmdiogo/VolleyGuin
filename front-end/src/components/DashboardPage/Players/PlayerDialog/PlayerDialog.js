import React from "react";
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Slide,
    Box
} from "@material-ui/core"
import PropTypes from 'prop-types'
import CloseIcon from "@material-ui/icons/Close"
import PlayerDialogContents from "./PlayerDialogContents/PlayerDialogContents";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function PlayerDialog(props) {
    const { open, onClose } = props

    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
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
                            <Button autoFocus color="inherit" onClick={onClose}>
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <PlayerDialogContents />
        </Dialog>
    )
}

PlayerDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default PlayerDialog
