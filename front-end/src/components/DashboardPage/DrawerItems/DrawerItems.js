import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
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
            to: '/travel',
            text: 'Travel',
            icon: <CardTravelIcon />
        },
        {
            to: '/jerseys',
            text: 'Jerseys',
            icon: <SportsVolleyballIcon />
        },
        {
            to: '/drivers',
            text: 'Drivers',
            icon: <DriveEtaIcon />
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
