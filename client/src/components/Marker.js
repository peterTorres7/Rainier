import React from 'react';
import { makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        width: '30px',
        height: '30px',
    },
});

export default function Marker() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LocationOnIcon />
        </div> 
    );
}