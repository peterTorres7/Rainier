import React from 'react';
import {GridList, GridListTile, makeStyles} from '@material-ui/core';
import PopularItem from './PopularItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
        backgroundColor: "#28B1D6",
    },
    gridListTile: {
        minWidth: '400px',
    }
}));

export default function PopularItemList({events}) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <GridList  cols={5}>
                {events.map((event) => (
                    <GridListTile className={classes.gridListTile} key={event._id}>
                        <PopularItem event={event} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}