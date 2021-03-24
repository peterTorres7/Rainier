import React from 'react';
import { makeStyles} from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({

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
                    <p3 className={classes} key={event._id}>
                        <Message event={event} />
                    </p3>
                ))}
            </ul>
        </div>
    )
}