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

type Props = {
    tabLabels: string[],
    children: any[]
}

function VerticalTabs({ tabLabels, children }: Props) {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const handleChange = (event: object, newValue: any) => {
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
                    tabLabels.map((label, i) => (
                        <Tab label={label} key={i} />
                    ))
                }
            </Tabs>
            {
                children.map((child, i) => (
                    <TabPanel index={i} value={value} key={i}>
                        { child }
                    </TabPanel>
                ))
            }
        </div>
    )
}

export default VerticalTabs
