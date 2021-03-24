import React, { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardActions, CardMedia, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import LocationDetail from './LocationDetail';
import axios from 'axios';

const useStyles = makeStyles ({
    root: {
        backgroundColor: '#20b2aa',
        display: 'flex',
        justifyContent: 'space-around',
        width: '50vm',
    },
    media: {
        display: 'flex',
        width: '100vw',
    },
    button: {
        display: 'inline',
        textAlign: 'center',
        width: '50vw',
        backgroundColor: '#c2debd',
        color: '#3d804f',
    },
});

function ProductDetails() {
    const classes = useStyles();
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("product id is", id)
      const config = {
        url: `http://localhost:4000/api/v1/products/${id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };

      axios(config).then((response) => {
        setEvent(response.data);
      }).catch((err) => {
        console.log(err);
          setError(err);
      })
    }, [id]);

    if (error) {
        return <div> { `${error}` } </div>;
    } else if (event) {
        return (
            <div className={classes.main}>
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
                        This {event.name} is a popular item right now!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        For only ${event.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Item Description: Donec blandit ultrices nisi quis posuere. Curabitur vel risus massa. Nunc lacinia lacinia mi, at dapibus tortor semper nec. Praesent dictum neque pharetra pharetra varius. Proin at velit at risus pulvinar iaculis nec et velit.
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            <Button className={classes.button} component={Link} to={"/users/${event}"} size="small" color="primary">
                Seller Profile
            </Button>
            <Button className={classes.button} component={Link} to={"/users/conversation"} size="small" color="primary">
                Message Seller
            </Button>     
            <LocationDetail />
            </div>
        )
    } else {
        return <div>Nothing to return</div>
    }
}

export default ProductDetails;

