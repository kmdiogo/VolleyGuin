import React, {useState} from 'react';
import {Box, Fab} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import TravelListTable from "./TravelListTable/TravelListTable";
import TripDialog from "./TripDialog/TripDialog";
import PrimaryActionFab from "../../shared/PrimaryActionFab";

function Travel() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editItem, setEditItem] = useState({});

    function handleDialogClose() {
        setIsDialogOpen(false)
    }

    function handleRowAdd() {
        setIsDialogOpen(true)
    }

    return (
        <Box>
            <TripDialog isOpen={isDialogOpen} onClose={handleDialogClose}/>
            <TravelListTable />
            <PrimaryActionFab onClick={handleRowAdd} icon={<AddIcon />} />
        </Box>
    );
}

export default Travel;
