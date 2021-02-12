import React from 'react';
import PopularItem from './PopularItem';
import './PopularItemGroup.css';
import {Grid} from "@material-ui/core";

export default function PopularItemGroup() {
    return (
        <div className = "main">
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <PopularItem></PopularItem>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <PopularItem></PopularItem>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <PopularItem></PopularItem>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <PopularItem></PopularItem>
                </Grid>
            </Grid>
        </div>
    )
}