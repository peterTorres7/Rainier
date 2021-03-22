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
    seller: {
        display: 'inline',
        textAlign: 'center',
        width: '50vw',
        backgroundColor: '#c2debd',
        color: '#3d804f',
    },
    details: {
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
        <Card className={classes.root}>
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
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${event.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.details} component={Link} to={'/Details'}  size="small" color="primary">
                    Item Details
                </Button>
                <Button className={classes.seller} component={Link} to={"/ProfilePage"} size="small" color="primary">
                    Contact Seller
                    </Button>     
            </CardActions>           
        </Card>
    )
}