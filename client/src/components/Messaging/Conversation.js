import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    makeStyles
} from "@material-ui/core";
import {Link} from 'react-router-dom';

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

export default function Conversation({ event }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <>
            <CardActionArea className={classes.root}>
                <CardContent className={classes.media}>
                    Hello? CardContent in Conversation
                </CardContent>
                <CardContent>
                    Hello? CardContent in Conversation ugh
                </CardContent>
            </CardActionArea>
            <CardContent>
                    Hello? CardContent in Conversation
                </CardContent>
            </>
            <CardContent>
                    Hello? CardContent in Conversation
                </CardContent>
        </Card>
    )
}