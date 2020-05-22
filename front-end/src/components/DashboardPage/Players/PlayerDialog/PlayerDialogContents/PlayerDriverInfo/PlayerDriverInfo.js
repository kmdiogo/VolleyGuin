import React, {useState} from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox
} from "@material-ui/core";
import stateList from '../../../../../../constants/us-states'
import {useInput} from "../../../../../../hooks/useInput";
import  { DropzoneArea } from 'material-ui-dropzone'

function PlayerDriverInfo() {
    const [licenseState, setLicenseState, bindLicenseState] = useInput('')
    const [mvrOnFile, setMvrOnFile] = useState(false)

    function handleChange(e) {
        setMvrOnFile(e.target.checked)
    }

    return (
        <Card elevation={5}>
            <CardHeader title="Driver Information" />
            <CardContent>
                <form autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <FormControlLabel
                                control={<Checkbox checked={mvrOnFile} onChange={handleChange} color="primary" />}
                                label="Motor Vehicle Record (MVR) on File?"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField label="Driver's License Number" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>State Issued</InputLabel>
                                <Select {...bindLicenseState} label="State Issued">
                                    {
                                        stateList.map(state => (
                                            <MenuItem value={state.abbreviation} key={state.abbreviation}>{state.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <DropzoneArea
                                acceptedFiles={['image/*']}
                                dropzoneText="Proof of Car Insurance (.jpg, .png)"
                            />
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default PlayerDriverInfo
