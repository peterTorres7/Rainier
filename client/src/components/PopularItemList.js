import React from 'react';
import {GridList, GridListTile, makeStyles} from '@material-ui/core';
import PopularItem from './PopularItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        backgroundColor: "#28B1D6",
    },
    gridList: {
        flexWrap: 'nowrap',
    }
}));

export default function PopularItemList({events}) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <GridList className={classes.gridList} cols={5}>
                {events.map((event) => (
                    <GridListTile key={event.id}>
                        <PopularItem event={event} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}