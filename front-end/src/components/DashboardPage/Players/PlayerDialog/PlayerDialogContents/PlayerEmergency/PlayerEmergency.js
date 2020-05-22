import React from "react";
import MaterialTable from "material-table";
import {
    Typography,
    Paper
} from "@material-ui/core";
import PropTypes from 'prop-types'

function PlayerEmergency(props) {
    const { onRowAdd, onRowDelete, onRowUpdate } = props

    return (
        <MaterialTable
            components={{
                Container: props => <Paper elevation={5}>{props.children}</Paper>
            }}
            title={
                <Typography variant="h5">
                    Emergency Contacts
                </Typography>
            }
            columns={[
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Phone Number', field: 'phoneNumber' },
            ]}
            data={[
                { firstName: 'Deez', lastName: 'Nutz', phoneNumber: '(420) 420-6969' },
                {firstName: 'Ur', lastName: 'Mom-Gay', phoneNumber: '(420) 420-1337'}
            ]}
            editable={{
                onRowAdd: onRowAdd,
                onRowDelete: onRowDelete,
                onRowUpdate: onRowUpdate
            }}
        />
    )
}

PlayerEmergency.propTypes = {
    onRowAdd: PropTypes.func.isRequired,
    onRowDelete: PropTypes.func.isRequired,
    onRowUpdate: PropTypes.func.isRequired
}

export default PlayerEmergency
