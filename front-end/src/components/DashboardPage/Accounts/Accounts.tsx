import React, {useState, useEffect} from 'react';
import MaterialTable from "material-table";
import {Typography, Box, Grid, TextField, Card, CardContent, CardHeader, Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {getAllUsers} from "../../../API";

function Accounts() {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        const getData = async () => {
            setLoading(true);
            const response = await getAllUsers();
            setLoading(false);
            setTableData(response.data);
        }
        getData();
    },[])

    return (
        <Box>
            <MaterialTable
                title={
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <AccountCircleIcon />
                        </Box>
                        <Typography variant="h5">
                            Active Accounts
                        </Typography>
                    </Box>
                }
                columns={[
                    { title: 'Username', field: 'username' },
                    { title: 'First Name', field: 'firstName' },
                    { title: 'Last Name', field: 'lastName' },
                ]}
                data={tableData}
                isLoading={loading}
            />
            <Box my={5}>
                <Card elevation={3}>
                    <CardHeader title="Invite New Admins"/>
                    <CardContent>
                        <form autoComplete="off">
                            <TextField required label="Email" variant="outlined" fullWidth helperText="An invite link will be sent to this email"/>
                        </form>
                        <Box mt={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<Icon>send</Icon>}
                            >
                                Send
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default Accounts;