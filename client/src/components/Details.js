import React, { useState, useEffect } from 'react';
import './Details.css';
import { ListItemIcon, Button } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import LocationDetail from './LocationDetail';
import axios from 'axios';

function ProductDetails() {     
    
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/products/${id}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        axios(config).then((response) => {
            setProduct(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
     }, [id]);
     console.log('this is the product id: ', id);

     if (loading) {
         return <p>loading...</p>
     } else if (error) {
         return <div> {`${error}`}</div>
     } else if (product) {
         return (
            <div className = "details">
            <p1>picture here?</p1>
            <h1>Name of item for sale</h1>
            <ListItemIcon ListItem alighnItems = "flex-start">List Item details<br>
                </br>list more item detailshere<br>
                </br>List more item details here</ListItemIcon>
            <br></br>
            <p1>descriptions</p1>
            <br></br>
            <p>Seller: </p>
            <Link to="/users/:id">
                View User Profile
            </Link>
            <Button className="messageButton" component={Link} to={'/users/conversation'}>
                Message Seller 
            </Button>

            <form action="/">
                <button className="homeButton">Home</button>
            </form>
            <LocationDetail />
        </div>
         )
     }

 }

export default ProductDetails;
