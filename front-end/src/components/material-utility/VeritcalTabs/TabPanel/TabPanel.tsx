import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

type Props = {
    children: React.ReactNode,
    index: number,
    value: number,
}

function TabPanel({ children, value, index, ...other }: Props) {

    return (
        <div hidden={value !== index} {...other} style={{width: '100%'}}>
            {value === index && (
                <Box p={3}>
                    { children }
                </Box>
            )}
        </div>
    );
}

export default TabPanel
