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

export default function conversation({ event }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    component="img"
                    alt="Image place holder"
                    image=""
                    title="Popular Item"
                />
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {event.time}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {event.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.details} component={Link} to={'/Details'}  size="small" color="primary">
                    {`Message is read?`, event.isRead}
                </Button>
                <Button className={classes.seller} component={Link} to={"/ProfilePage"} size="small" color="primary">
                    {`sender`, event.sender}
                </Button>     
            </CardActions>
            </>
        </Card>
    )
}