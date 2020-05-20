import React, {useState} from "react";
import {TextField, Grid } from "@material-ui/core";
import {KeyboardDatePicker} from '@material-ui/pickers';
import {useInput} from "../../../../../hooks/useInput";


function TripInfoForm() {
    const [tripName, setTripName, bindTripName] = useInput('')
    const [tripLeader, setTripLeader, bindTripLeader] = useInput('')
    const [startDate, setStartDate, bindStartDate] = useInput(null, true)
    const [endDate, setEndDate, bindEndDate] = useInput(null, true)


    return (
        <form autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField required label="Trip Name" variant="outlined" fullWidth {...bindTripName} />
                </Grid>
                <Grid item xs={12}>
                    <TextField required label="Trip Leader(s)" variant="outlined" fullWidth {...bindTripLeader} />
                </Grid>
                <Grid item xs={6}>
                    <KeyboardDatePicker required label="Start Date" variant="outlined" fullWidth {...bindStartDate} inputVariant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <KeyboardDatePicker required label="End Date" variant="outlined" fullWidth {...bindEndDate} inputVariant="outlined" />
                </Grid>
            </Grid>
        </form>
    )
}

export default TripInfoForm
