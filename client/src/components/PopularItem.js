import React from 'react';
import './PopularItem.css';
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
    details: {
        backgroundColor: "#7AD628",
        textAlign: 'center',
    },
    media: {
        height: '150px',
    },
    root: {
        padding: theme.spacing(1),
        maxWidth: '350px',
        marginLeft: "20px",
        marginBottom: '20px',
        backgroundColor: "#28B1D6",
    },
    seller: {
        backgroundColor: "#7AD628",
        textAlign: 'center',
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
                        {/* {event.name} */}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {event.price} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.details} component={Link} to={'/Details.js'}  size="small" color="primary">
                    Item Details
                </Button>
                <Button className={classes.seller} component={Link} to={"/ProfilePage.js"} size="small" color="primary">
                    Contact Seller
                    </Button>     
            </CardActions>
        </Card>
    )
}