import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import Conversation from './Conversation';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marging: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    conversation: {
        margin: theme.spacing(1),
    },
}));

export default function ConversationContainer({events}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='column'>
                <Grid item className={classes.conversation}>
                    <Typography variant='h3'>Conversations</Typography>
                </Grid>
                <Conversation events={events} />
            </Grid>
        </div>
    );
}