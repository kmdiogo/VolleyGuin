import React from 'react';
import MaterialTable from "material-table";
import PropTypes from 'prop-types'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Typography from "@material-ui/core/Typography";
import CardTravelIcon from "@material-ui/icons/CardTravel";

function TravelListTable(props) {
    const { onRowAdd, onRowUpdate, onRowDelete } = props

    return (
        <MaterialTable
            title={
                <Typography variant="h5">
                    Travel <CardTravelIcon />
                </Typography>
            }
            columns={[
                { title: 'Trip Name', field: 'tripName' },
                { title: 'Start Date', field: 'startDate' },
                { title: 'End Date', field: 'endDate' },
            ]}
            data={[
                { tripName: 'YSU @Gannon University', startDate: 'Ur', endDate: 'mom' },
                { tripName: 'YSU @Gannon University', startDate: 'Ur', endDate: 'mom' },
            ]}
            detailPanel={rowData => {
                return (
                    <div />
                )
            }}
            editable={{
                onRowUpdate: onRowUpdate,
                onRowDelete: onRowDelete
            }}
            /*actions={/
                {
                    icon: "add",
                    onClick: onRowAdd,
                    isFreeAction: true,
                    tooltip: 'Add Trip'
                }
            ]}*/
        />
    );
}

TravelListTable.propTypes = {
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func,
}

export default TravelListTable;
