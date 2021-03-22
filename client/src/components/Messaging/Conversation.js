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
        padding: theme.spacing(1),
        maxWidth: '100%',
        marginLeft: "20px",
        marginBottom: '20px',
        backgroundColor: "#d8e3e6",
        minWidth: '300px',
    },
}));

export default function Conversation({ events }) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <GridList  cols={5}>
                {events.map((event) => (
                    <GridListTile className={classes.gridListTile} key={event._id}>
                        <Message event={event} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}