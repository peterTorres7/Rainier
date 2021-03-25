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
        padding: '10px',
        justifyContent: 'space-evenly',
        background: '#d8e3e6',
        color: 'navy',
        outlineColor: 'grey'
    },
    input: {
        height: '35px',
        display: 'flex',
        marging: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        display: 'center',
        marginLeft: '55px',
        paddingLeft: '150px'
    }
}));

 const defaultFormValues = {
     sender: 'Annelise',
     text: '',
     isRead: 'false',
 };

export default function ConversationContainer({events}) {
    const classes = useStyles();

     const [productFormValues, setProductFormValues] = useState(defaultFormValues);
     const { getAccessTokenSilently } = useAuth0();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Property', name, 'Value: ', value);
        setProductFormValues({
            ...productFormValues,
           [name] : value,
        });
    };

    const handleSubmit = async (event) => {
       event.preventDefault();
       const authToken = await getAccessTokenSilently();

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
                <input 
                    className={classes.input}
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
            </Container>
        </div>
    );
}

withAuthenticationRequired(ConversationContainer, {
    returnTo: () => '/users/conversation',
});