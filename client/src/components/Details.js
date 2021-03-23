import React, { useState, useEffect } from 'react';
import './Details.css';
import { ListItemIcon, Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import LocationDetail from './LocationDetail';
import axios from 'axios';

function ProductDetails(event) {     
    
    const { id } = useParams();
    console.log('details product id: ', id)
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
            <div className='details'>
            <p1 className='itemImage'>**Item Image Placeholder**</p1>
            <h1>{product.name}</h1>
            <h4>
                Price: ${product.price}
            </h4>
            <p>Seller: {product.user} </p>
            <ListItemIcon>Original Listing Date: {product.date} </ListItemIcon>
            <br></br>
            <Link to={`/users/${event}`}>
                View User Profile
            </Link>
            <Button className='messageButton' component={Link} to={'/users/conversation'}>
                Message Seller 
            </Button>

            <form action='/'>
                <button className='homeButton'>Home</button>
            </form>
            <br></br>
            <LocationDetail className='location'/>
        </div>
         )
     }
 }

export default ProductDetails;
