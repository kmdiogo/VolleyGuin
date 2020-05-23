import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function DrawerItems() {
    let location = useLocation()
    const drawerItems = [
        {
            to: '/',
            text: 'Home',
            icon: <DashboardIcon />
        },
        {
            to: '/players',
            text: 'Players',
            icon: <SportsHandballIcon />
        },
        {
            to: '/lineup',
            text: 'Line-Up',
            icon: <SportsVolleyballIcon />
        },
        {
            to: '/travel',
            text: 'Travel',
            icon: <DriveEtaIcon />
        },
        {
            to: '/jerseys',
            text: 'Jerseys',
            icon: <AssignmentIndIcon />
        },
        {
            to: '/forms',
            text: 'Forms',
            icon: <AssignmentIcon />
        },
        {
            to: '/accounts',
            text: 'Accounts',
            icon: <SupervisorAccountIcon />
        },
    ]
    return (
        <div>
            {
                drawerItems.map(item => {
                    return (
                        <ListItem button component={Link} to={item.to} selected={location.pathname === item.to} key={item.to}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )
                })
            }
        </div>
    );
}
