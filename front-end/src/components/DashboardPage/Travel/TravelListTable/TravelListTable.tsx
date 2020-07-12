import React from 'react';
import MaterialTable from "material-table";
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import {Trip} from "../../../../types";
import {db_trips} from "../../../../constants/mock-db";

type Props = {
    onRowAdd?: (newData: Trip) => Promise<any>
    onRowDelete?: (newData: Trip) => Promise<any>
    onRowUpdate?: (newData: Trip, oldData?: Trip) => Promise<any>
}

function TravelListTable({ onRowAdd, onRowUpdate, onRowDelete }: Props) {

    return (
        <MaterialTable
            title={
                <Typography variant="h5">
                    Travel
                </Typography>
            }
            columns={[
                { title: 'Trip Name', field: 'tripName' },
                { title: 'Start Date', field: 'startDate' },
                { title: 'End Date', field: 'endDate' },
            ]}
            data={db_trips}
            detailPanel={rowData => {
                return (
                    <div />
                )
            }}
            editable={{
                onRowUpdate: onRowUpdate,
                onRowDelete: onRowDelete
            }}
        />
    );
}

TravelListTable.propTypes = {
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func,
}

export default TravelListTable;
