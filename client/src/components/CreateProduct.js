import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
// import AuthButton from './AuthButton';

import {
    TextField,
    makeStyles,
    FormContorl,
    Input,
    InputLabel,
 } from "@material-ui/core";

 const defaultFormValues = {
     name: "",
     qty: '',
     price: '',
     user: '',
     date: '',
 };

 const useStyles = makeStyles((theme) => ({
     root: {
         border: 1,
         borderRadius: 2,
         color: 'grey',
         height: 20,
         padding: '20 30px',
         margin: theme.spacing(5),
     },
     formControl: {
         //margin: theme.spacing(5),
         padding: 20,             
    },
    title: {
        margin: theme.spacing(1),
    },
 }));

 export default function CreateProduct() {
     const classes = useStyles();
     const [productFormValues, setProductFormValues] = useState(defaultFormValues);
     const [success, setSuccess] = useState(false);
     const { getAccessTokenSilently } = useAuth0();

     const handleInputChange = (event) => {
         const { name, value } = event.target;
         setProductFormValues({
             ...productFormValues,
            [name] : value,
         });
     };

     const handleSubmit = async (event) => {
         event.preventDefault();
         const authToken = await getAccessTokenSilently();

         const requestConfig = {
             url: 'http://localhost:4000/api/v1/products/',
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
            .then((response) => {
                setSuccess(true);
                console.log(`Product created ${response.data}`);
            })
            .catch((err) => {
                console.log("error");
            });
     };

    if (success) {
        return <Redirect to="/item/itemCreated" />;
    }
    else {
        return (
            <form
                onSubmit={handleSubmit}
                class={classes.root}
                id="productCreateForm">
                Enter Details of Product for sale:
                {/* <AuthButton>Authentication Button</AuthButton> */}
                <TextField id = "name" class = {classes.root} placeholder="Product Name" value={productFormValues.name} onChange={handleInputChange} />
                <TextField id = "qty" class = {classes.root} placeholder="Product Quantity" value={productFormValues.qty} />
                <TextField id = "price" class = {classes.root} placeholder="Product Price" value={productFormValues.price} />
                <TextField id = "user" class = {classes.root} placeholder="Product User" value={productFormValues.user} />
                <TextField id = "date" class = {classes.root} placeholder="Product Date" value={productFormValues.date} />
                <button class = {classes.formControl}  onClick={handleInputChange} >Submit new product for sale</button>
            </form>
        )
    }
};
    
//export default 
withAuthenticationRequired(CreateProduct, {
    returnTo: () => '/item/CreateProduct',
});