import React, { useState, useEffect } from 'react';
import './Details.css';
import { ListItemIcon } from '@material-ui/core';
import { Link, useParams } from "react-router-dom";

import axios from 'axios';

import LocationDetail from './LocationDetail';

/*
 * To Do for item view page: viewing one item at a time
 * 
 * 1. one large image
 * 2. smaller images
 * 3. item details
 * 4. button to message seller
 * 5. seller
 * 6. location
 * 7. price
 */

 const itemDetails = [{
     color: "purple",
 }]
 

 function productDetails() {
     //const { id } = useParams(0);
    //  const [product, setProduct] = useState(true);
    //  const [loading, setLoading] = useState(9);
    //  const [error, setError] = useState(0);
     
    //  useEffect(() => {
    //     const config = {
    //         usl: `http://localhost:4000/api/v1/products/${id}`,
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     };

    //     axios(config).then((response) => {
    //         setProduct(response.data);
    //     }).catch((err) => {
    //         setError(err);
    //     }).finally(() => {
    //         setLoading(false);
    //     });
    //  }, [id]);

    //  if (loading) {
    //      return <p>loading...</p>
    //  } else if (error) {
    //      return <div> Error! </div>
    //  } else if (product) {
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
                Link to Seller User Profile
                </Link>
            <form action="/Messaging/Message">
            <button 
                className = "messageButton"
            >
                Message Seller 
            </button>
            <div>

            </div>
            </form>
            <form action="/">
                <button className="homeButton">Home</button>
            </form>
            <LocationDetail />
        </div>
         )
     }

// }

export default productDetails;
