import React from 'react';
import {Box, Fab} from "@material-ui/core"
import * as PropTypes from "prop-types";

function PrimaryActionFab(props) {
    return <Box position="fixed" right={30} bottom={30}>
        <Fab color="primary" onClick={props.onClick}>
            { props.icon }
        </Fab>
    </Box>;
}

PrimaryActionFab.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.element
};

export default PrimaryActionFab
