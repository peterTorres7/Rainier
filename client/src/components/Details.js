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
            url: `http://localhost:4000/api/v1/popularItem/${id}`,
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
    return <div>Loading...</div>;
}

export default Details;
