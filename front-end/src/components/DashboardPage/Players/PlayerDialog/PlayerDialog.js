import React from "react";
import {
    Dialog,
    Slide,
    Button,
    Container,
    Divider,
    Box
} from "@material-ui/core"
import PropTypes from 'prop-types'
import PlayerDialogAppBar from "./PlayerDialogAppBar/PlayerDialogAppBar";
import PlayerBasicInfo from "./PlayerDialogContents/PlayerBasicInfo/PlayerBasicInfo";
import PlayerEmergency from "./PlayerDialogContents/PlayerEmergency/PlayerEmergency";
import PlayerDriverInfo from "./PlayerDialogContents/PlayerDriverInfo/PlayerDriverInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const cardMargins = 5

function PlayerDialog(props) {
    const { open, onClose } = props
    const handleEmergencyAdd = (newData) => new Promise(resolve => {
        console.log(newData)
        resolve()
    })
    const handleEmergencyUpdate = (newData, oldData) => new Promise(resolve => {
        console.log(newData)
        console.log(oldData)
        resolve()
    })
    const handleEmergencyDelete = (oldData) => new Promise(resolve => {
        console.log(oldData)
        resolve()
    })

    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
            <PlayerDialogAppBar onClose={onClose} />
            <Container>
                <Box my={cardMargins}>
                    <PlayerBasicInfo />
                </Box>
                <Box mb={cardMargins}>
                    <PlayerEmergency onRowAdd={handleEmergencyAdd} onRowDelete={handleEmergencyDelete} onRowUpdate={handleEmergencyUpdate} />
                </Box>
                <Box mb={cardMargins}>
                    <PlayerDriverInfo />
                </Box>
                <Box display="flex" justifyContent="flex-end" mb={3}>
                    <Button variant="contained" color="primary">Save</Button>
                </Box>
            </Container>
        </Dialog>
    )
}

PlayerDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default PlayerDialog
