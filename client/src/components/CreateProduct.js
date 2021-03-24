import React, { useState } from "react";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import FileUploader from './FileUploader';

import {
    TextField,
    makeStyles,
    Container,
} from "@material-ui/core";

 const defaultFormValues = {
     name: '',
     qty: '',
     price: '',
     user: '',
     date: '',
 };

 const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '50px',
        margin: '10px',
        justifyContent: 'space-evenly',
        display: 'block',
    },
     formControl: {
         padding: 20,             
    },
 }));

 export default function CreateProduct() {
     const classes = useStyles();
     const [productFormValues, setProductFormValues] = useState(defaultFormValues);
     const [success, setSuccess] = useState(false);
     const { getAccessTokenSilently } = useAuth0();

     const handleInputChange = (event) => {
         const { name, value } = event.target;
         console.log('name ', name, ' value ', value);
         setProductFormValues({
             ...productFormValues,
            [name] : value,
         });
     };

     const handleSubmit = async (event) => {
        console.log('event', event);
        event.preventDefault();
        const authToken = await getAccessTokenSilently();
        console.log('THIS IS THE AUTH TOKEN: ', authToken);

         const requestConfig = {
             url: 'http://localhost:4000/api/v1/products',
             method: 'post',
             headers: { 
                'Content-Type' : 'application/json',
                 Authorization: `Bearer ${authToken}`,
             },
             data: {
                 name: productFormValues.name,
                 qty: productFormValues.qty,
                 price: productFormValues.price,
                 user: productFormValues.user,
                 date: productFormValues.date,
             },
         };

         axios(requestConfig)
            .then(() => {
                setSuccess(true);
                console.log('Product created');
            })
            .catch((err) => {
                console.log("AXIOS ERROR - ", err);
            });
     };

    if (success) {
        return (
            <h1 className={classes.title}>
                -- Product has successfully been created -- 
            </h1>
        )
    }
    else {
        return (
            <Container>
                <form
                    className={classes.root}
                    id="productCreateForm"
                    >
                    Enter Details of Product for sale:
                    <TextField 
                        id = "name" 
                        className = {classes.root} 
                        aria-label="Name Input"
                        aria-required="true"
                        placeholder="Product Name" 
                        defaultValue={productFormValues.name} 
                        onChange={handleInputChange} 
                        name='name'
                    />

                    <TextField 
                        id = "qty" 
                        className= {classes.root} 
                        aria-label="Quantity Input"
                        aria-required="true"
                        placeholder="Product Quantity" 
                        defaultValue={productFormValues.qty} 
                        onChange={handleInputChange} 
                        name='qty'
                    />

                    <TextField 
                        id = "price" 
                        className= {classes.root} 
                        aria-label="Price Input" 
                        aria-required="true"
                        placeholder="Product Price" 
                        defaultValue={productFormValues.price} 
                        onChange={handleInputChange} 
                        name='price'
                    />

                    <TextField 
                        id = "user" 
                        className= {classes.root} 
                        aria-label="User Input" 
                        aria-required="true"
                        placeholder="Product User" 
                        defaultValue={productFormValues.user} 
                        onChange={handleInputChange} 
                        name='user'
                    />

                    <TextField 
                        id = "date" 
                        className= {classes.root} 
                        aria-label="Date Input" 
                        aria-required="true"
                        placeholder="Product Date" 
                        defaultValue={productFormValues.date}
                        onChange={handleInputChange} 
                        name='date' 
                    />

                    <FileUploader />

                    <button 
                        className= {classes.formControl}
                        aria-label="Submit Button" 
                        aria-required="true"  
                        onClick={handleSubmit}
                    >
                      Submit new product for sale
                    </button>
                </form>
            </Container>
        )
    }
};
    
withAuthenticationRequired(CreateProduct, {
    returnTo: () => '/product/CreateProduct',
});