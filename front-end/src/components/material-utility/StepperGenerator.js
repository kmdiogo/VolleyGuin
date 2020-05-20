import React from 'react';
import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'
import PropTypes from 'prop-types'
import {StayPrimaryPortrait} from "@material-ui/icons";

function StepperGenerator(props) {
    const { stepperPages, activeStep } = props

    return (
        <React.Fragment>
            <Stepper activeStep={activeStep}>
                {
                    stepperPages.map(page => (
                        <Step>
                            <StepLabel>{page.label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            { stepperPages[activeStep].component }
        </React.Fragment>
    );
}

StepperGenerator.propTypes = {
    stepperPages: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired
}

export default StepperGenerator;
