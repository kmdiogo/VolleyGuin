import React from 'react';
import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'
import PropTypes from 'prop-types'

type StepperPage = {
    component: React.ReactElement
    label: string
}
type Props = {
    stepperPages: StepperPage[],
    activeStep: number
}

function StepperGenerator({ stepperPages, activeStep }: Props) {

    return (
        <React.Fragment>
            <Stepper activeStep={activeStep}>
                {
                    stepperPages.map((page, index) => (
                        <Step key={index}>
                            <StepLabel>{page.label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            { stepperPages[activeStep].component }
        </React.Fragment>
    );
}

export default StepperGenerator;
