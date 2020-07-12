import React from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Typography,
    IconButton,
    Box,
    Button
} from '@material-ui/core'
import PropTypes from 'prop-types'
import CloseIcon from '@material-ui/icons/Close';
import TripInfoForm from "./TripInfoForm/TripInfoForm";
import StepperGenerator from "../../../material-utility/StepperGenerator";

const stepperPages = [
    {
        component: <TripInfoForm />,
        label: 'Basic Information'
    },
    {
        component: <div />,
        label: 'Participants'
    },
    {
        component: <div />,
        label: 'Driver Information'
    }
]

type Props = {
    onClose: () => void,
    isOpen: boolean
}

function TripDialog({ onClose, isOpen }: Props) {
    const [activeStep, setActiveStep] = React.useState(0);

    function handleClose() {
        onClose()
    }

    function handleNext() {
        if (activeStep >= stepperPages.length-1) return
        setActiveStep(prevState => prevState+1)
    }

    function handleBack() {
        if (activeStep <= 0) return
        setActiveStep(prevState => prevState-1)
    }

    const CustomDialogTitle = (props: any) => (
        <DialogTitle disableTypography>
            <Box display="flex">
                <Typography variant="h6">{props.children}</Typography>
                {onClose ? (
                    <Box ml="auto">
                        <IconButton onClick={onClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                ) : null}
            </Box>
        </DialogTitle>
    );

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} fullWidth disableBackdropClick maxWidth={'lg'}>
                <CustomDialogTitle>
                    New Trip
                </CustomDialogTitle>
                <DialogContent dividers>
                    <StepperGenerator stepperPages={stepperPages} activeStep={activeStep} />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                        Back
                    </Button>
                    <Button color="primary" variant="contained" onClick={handleNext}>
                        { activeStep === stepperPages.length-1 ? 'Finish' : 'Next' }
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

TripDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default TripDialog;
