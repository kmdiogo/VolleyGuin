import React from "react";
import PropTypes from 'prop-types'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Tab, Tabs} from "@material-ui/core";
import TabPanel from "./TabPanel/TabPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function VerticalTabs(props) {
    const { tabLabels, children } = props
    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                {
                    tabLabels.map(label => (
                        <Tab label={label} key={label} />
                    ))
                }
            </Tabs>
            {
                children.map((child, i) => (
                    <TabPanel index={i} value={value}>
                        { child }
                    </TabPanel>
                ))
            }
        </div>
    )
}

VerticalTabs.propTypes = {
    tabLabels: PropTypes.array.isRequired,
    children: PropTypes.array.isRequired
}

export default VerticalTabs
