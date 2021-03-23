import React, { useState } from 'react';
import {Grid, Typography, makeStyles, Container} from '@material-ui/core';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import Conversation from './Conversation';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marging: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',

    },
    conversation: {
        margin: theme.spacing(1),
    },
    button: {
        display: 'center',
        padding: '30px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        background: '#d8e3e6',
        color: 'navy',
        outlineColor: 'grey'
    }
}));

 const defaultFormValues = {
     sender: 'Annelise',
     text: '',
     isRead: 'true',
 };


export default function ConversationContainer({events}) {
    const classes = useStyles();

     const [productFormValues, setProductFormValues] = useState(defaultFormValues);
     const [success, setSuccess] = useState(false);
     const { getAccessTokenSilently } = useAuth0();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Sender: ', name, 'Message Value ', value);
        setProductFormValues({
            ...productFormValues,
           [name] : value,
        });
    };

    const handleSubmit = async (event) => {
       console.log("button pressed");
       console.log('event', event);
       event.preventDefault();
       const authToken = await getAccessTokenSilently();
       console.log('THIS IS THE AUTH TOKEN: ', authToken);

        const requestConfig = {
            url: 'http://localhost:4000/api/v1/users/conversation',
            method: 'post',
            headers: { 
               'Content-Type' : 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            data: {
                sender: productFormValues.sender,
                text: productFormValues.text,
                isRead: productFormValues.isRead,
            },
        };

        axios(requestConfig)
           .then(() => {
               setSuccess(true);
               console.log('Message Sent');
           })
           .catch((err) => {
               console.log("Error in Conversation Container - ", err);
           });
    };

    return (
        <div className={classes.root}>
            <Container container direction='column'>
                <Grid item className={classes.root}>
                    <Typography variant='h4'>Conversation </Typography>
                </Grid>
                <Conversation events={events} />
            </Container>
                <input 
                    placeholder='Write new message here: ' 
                    defaultValue={productFormValues.text}
                    onChange={handleInputChange}
                    name='text'
                />

                <button 
                    className={classes.button}
                    onClick={handleSubmit}
                    >
                    Send Message
                </button>
        </div>
    );
}

withAuthenticationRequired(ConversationContainer, {
    returnTo: () => '/users/conversation',
});