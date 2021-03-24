import React from 'react';
import {GridList, GridListTile, makeStyles} from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({

    media: {
        display: 'flex',
        width: '100vw',
    },
    root: {
        display: 'inline',
    },
}));

export default function Conversation({ events }) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <ul>
                {events.map((event) => (
                    <p3 className={classes.gridListTile} key={event._id}>
                        <Message event={event} />
                    </p3>
                ))}
            </ul>
        </div>
    )
}