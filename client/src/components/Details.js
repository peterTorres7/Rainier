import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Details.css';
import PopularItem from './PopularItem';
import { 
    ListItemIcon
     } from '@material-ui/core';
import { useParams } from "react-router-dom";

function Details() {
    const {id} = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const config = {
            url: `http://localhost:4000/api/v1/products/${id}`,
            method: 'GET',
            headers: { 'Content-Type' : 'application/json'},
        };

        axios(config).then((response) => {
            setEvent(response.data);
        });
    }, [id]);

    if(event) {
        return <PopularItem event={event} />
    }
            // return (
            //     <div className = "details">
            //         <p1>picture here?</p1>
            //         <h1>Name of item for sale</h1>
            //         <ListItemIcon ListItem alighnItems = "flex-start">List Item details<br>
            //             </br>list more item detailshere<br>
            //             </br>List more item details here</ListItemIcon>
            //         <br></br>
            //         <p1>descriptions</p1>
            //         <br></br>
            //         <p>Seller: </p>
            //         <Link to="/users">
            //             Link to Seller User Profile
            //             </Link>
            //         <button 
            //             class = "button"
            //             onClick={() => {
            //                 alert("will start messages with seller")
            //             }}>Message Seller </button>
            //         <form action="/">
            //             <button class="homeButton">Home</button>
            //         </form>
            //     </div>
            // )
        
    
    return <div>Loading...</div>;
}

export default Details;
