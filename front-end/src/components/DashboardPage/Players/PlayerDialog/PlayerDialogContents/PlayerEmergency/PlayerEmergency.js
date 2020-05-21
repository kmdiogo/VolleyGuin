import React from "react";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";

function PlayerEmergency() {

    return (
        <MaterialTable
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
        />
    )
}

export default PlayerEmergency
