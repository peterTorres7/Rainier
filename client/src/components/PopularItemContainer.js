import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import PopularItemList from './PopularItemList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    featuredItem: {
        margin: theme.spacing(1),
    },
}));

export default function PopularItemContainer({events}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='column'>
                <Grid item className={classes.featuredItem}>
                    <Typography variant='h3'>Latest Items</Typography>
                </Grid>
                <PopularItemList events={events} />
            </Grid>
        </div>
    );
}