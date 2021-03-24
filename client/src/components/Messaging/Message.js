import React from 'react';
import {
    Typography,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    root: {
        padding: theme.spacing(1),
        maxWidth: '100%',
        marginLeft: "20px",
        marginBottom: '20px',
        backgroundColor: "#d8e3e6",
        minWidth: '300px',
    },
    seller: {
        display: 'inline',
        textAlign: 'center',
        width: '50vw',
        backgroundColor: '#c2debd',
        color: '#3d804f',
    },
}));

export default function PopularItem({ event }) {
    const classes = useStyles();
    return (
        <p className={classes.root}>
            <Typography variant="h6">
                From: {event.sender}
            </Typography>
            <Typography component="p">
                {event.text}
            </Typography>
        </p>
    )
}