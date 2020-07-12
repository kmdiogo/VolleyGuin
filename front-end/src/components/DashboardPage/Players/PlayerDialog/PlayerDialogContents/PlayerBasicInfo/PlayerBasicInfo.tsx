import React from "react";
import {
    Grid,
    TextField,
    Card,
    CardHeader,
    CardContent
} from "@material-ui/core"
import {KeyboardDatePicker} from "@material-ui/pickers";
import {useInput} from "../../../../../../hooks/useInput";

function PlayerBasicInfo() {
    const [dob, setDob, bindDob] = useInput(null, true)

    return (
        <Card elevation={5}>
            <CardHeader title="Basic Information (Required)" />
            <CardContent>
                <form autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField required label="Y Number" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <KeyboardDatePicker required label="Date of Birth" fullWidth {...bindDob} inputVariant="outlined" format="MM/DD/yyyy" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField required label="First Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField required label="Last Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField required label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField required label="Phone Number" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default PlayerBasicInfo
