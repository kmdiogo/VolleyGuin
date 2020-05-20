import React, {useState} from "react";
import {
    TextField, Grid,
    Box,
    Button,
    IconButton
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles({
    input: {
        display: 'none'
    }
})
function PlayerListEntryForm() {
    const classes = useStyles()

    return (
        <Box component="form" width="100%" autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex" spacing={1}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" aria-label="upload picture" component="span">
                            <Box mr={1}>Photo Upload</Box>
                            <PhotoCameraIcon />
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={6}>
                    <TextField required label="First Name" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField required label="Last Name" variant="outlined" fullWidth size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField required label="Y Number" variant="outlined" fullWidth inputVariant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField required label="Email" variant="outlined" fullWidth inputVariant="outlined" size="small" />
                </Grid>
                <Grid item xs={12}>
                    <TextField multiline rows={4} required label="Comments" variant="outlined" fullWidth inputVariant="outlined" size="small" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlayerListEntryForm
