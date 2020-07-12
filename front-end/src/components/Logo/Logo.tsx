import React from 'react';
import volleyGuinLogo from '../../assets/VolleyGuinLogo192.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={volleyGuinLogo} alt="my logo"/>
    </div>
);

export default logo;
