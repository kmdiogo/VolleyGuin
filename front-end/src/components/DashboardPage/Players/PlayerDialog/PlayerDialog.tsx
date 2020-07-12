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
import {EmergencyContact, Player} from "../../../../types";
import {TransitionProps} from "@material-ui/core/transitions";

type Props = {
    onClose: () => void,
    player?: Player
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const cardMargins = 5
function PlayerDialog({ onClose, player }: Props) {
    const handleEmergencyAdd = (newData: EmergencyContact) => new Promise(resolve => {
        console.log(newData)
        resolve()
    })
    const handleEmergencyUpdate = (newData: EmergencyContact, oldData?: EmergencyContact) => new Promise(resolve => {
        console.log(newData)
        console.log(oldData)
        resolve()
    })
    const handleEmergencyDelete = (oldData: EmergencyContact) => new Promise(resolve => {
        console.log(oldData)
        resolve()
    })

    return (
        <Dialog fullScreen open={!!player} TransitionComponent={Transition}>
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
    onClose: PropTypes.func.isRequired,
    player: PropTypes.object
}

export default PlayerDialog
