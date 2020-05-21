import React from "react";
import {
    Box,
    Grid,
    TextField,
    Card,
    CardHeader,
    CardContent
} from "@material-ui/core"

function PlayerBasicInfo() {

    return (
        <Card>
            <CardHeader title="Basic Information" />
            <CardContent>
                <form autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField required label="Y Number" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={6} />
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
