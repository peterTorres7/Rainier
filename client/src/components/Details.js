import React from 'react';
import './Details.css';
import { 
    ListItemIcon
     } from '@material-ui/core';
import { Link } from "react-router-dom";
      


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


export default function details() {
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
            <Link to="/users">
                Link to Seller User Profile
                </Link>
            <button 
                class = "button"
                onClick={() => {
                    alert("will start messages with seller")
                }}>Message Seller </button>
            <form action="/">
                <button class="homeButton">Home</button>
            </form>
        </div>
    )
}

