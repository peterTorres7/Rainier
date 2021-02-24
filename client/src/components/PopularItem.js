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
        marginLeft: "40px",
        backgroundColor: "#7AD628",
    },
    media: {
        height: 150,
    },
    root: {
        padding: theme.spacing(1),
        maxWidth: 350,
        marginLeft: "25px",
        backgroundColor: "#28B1D6",
    },
    seller: {
        backgroundColor: "#7AD628"
    },
}));

export default function PopularItem() {
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
                        Popular Item
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Suspendisse malesuada mauris libero, vitae tempor eros tempor sed.
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