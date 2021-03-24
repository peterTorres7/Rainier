import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import PopularItemList from './PopularItemList';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marging: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        color: 'darkslategrey',
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
                    <Typography variant='h3'>Popular Items</Typography>
                    <h3>Please enjoy browsing through the items for sale!</h3>
                </Grid>
                <PopularItemList events={events} />
            </Grid>
        </div>
    );
}