import React from 'react';
import {Box, Fab} from "@material-ui/core"

type Props = {
    onClick?: () => void
    icon: React.ReactElement
}
function PrimaryActionFab(props: Props) {
    return <Box position="fixed" right={30} bottom={30}>
        <Fab color="primary" onClick={props.onClick}>
            { props.icon }
        </Fab>
    </Box>;
}

export default PrimaryActionFab
