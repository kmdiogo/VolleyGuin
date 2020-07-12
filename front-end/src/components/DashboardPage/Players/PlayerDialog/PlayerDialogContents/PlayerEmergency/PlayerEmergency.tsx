import React from "react";
import MaterialTable, {Column} from "material-table";
import {
    Typography,
    Paper
} from "@material-ui/core";
import PropTypes from 'prop-types'
import {EmergencyContact} from "../../../../../../types";
import {db_emergency_contacts} from "../../../../../../constants/mock-db";

type Props = {
    onRowAdd: (newData: EmergencyContact) => Promise<any>
    onRowDelete: (newData: EmergencyContact) => Promise<any>
    onRowUpdate: (newData: EmergencyContact, oldData?: EmergencyContact) => Promise<any>
}

function PlayerEmergency({ onRowAdd, onRowDelete, onRowUpdate }: Props) {

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
            data={db_emergency_contacts}
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
