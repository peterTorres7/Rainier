import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

import {
    TextField,
    makeStyles,
    Container,
    Select,
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
         border: 1,
         borderRadius: 2,
         color: 'grey',
         height: 20,
         padding: '20 30px',
         margin: theme.spacing(5),
     },
     formControl: {
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
         console.log('name ', name, ' value ', value);
         setProductFormValues({
             ...productFormValues,
            [name] : value,
         });
     };

     const handleSubmit = async (event) => {
         console.log('event', event);
         console.log("hello?");
         event.preventDefault();
         const authToken = await getAccessTokenSilently();

         const requestConfig = {
             url: 'http://localhost:4000/api/v1/products/',
             method: 'post',
             headers: { 
                'Content-Type' : 'application/json',
                 Authorization: `Bearer ${authToken}`,
             },
             //unpacking
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
                console.log("error ", err);
            });
     };

    if (success) {
        return <Redirect to="/item/itemCreated" />;
    }
    else {
        return (
            <Container>
                <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    id="productCreateForm"
                    >
                    Enter Details of Product for sale:
                    <TextField 
                        id = "name" 
                        className = {classes.root} 
                        placeholder="Product Name" 
                        defaultValue={productFormValues.name} 
                        onChange={handleInputChange} 
                        name="productName"
                    />

                    <TextField 
                        id = "qty" 
                        className= {classes.root} 
                        placeholder="Product Quantity" 
                        defaultValue={productFormValues.qty} 
                        onChange={handleInputChange} 
                        name="productQty"
                    />

                    <TextField 
                        id = "price" 
                        className= {classes.root} 
                        placeholder="Product Price" 
                        defaultValue={productFormValues.price} 
                        onChange={handleInputChange} 
                        name="productPrice"
                    />

                    <TextField 
                        id = "user" 
                        className= {classes.root} 
                        placeholder="Product User" 
                        defaultValue={productFormValues.user} 
                        onChange={handleInputChange} 
                        name="productUser"
                    />

                    <TextField 
                        id = "date" 
                        className= {classes.root} 
                        placeholder="Product Date" 
                        defaultValue={productFormValues.date}
                        onChange={handleInputChange} 
                        name="productDate" 
                    />

                    <button 
                        className= {classes.formControl}  
                        type="submit"
                        form="productCreateForm"
                    >
                      Submit new product for sale
                    </button>
                </form>
            </Container>
        )
    }
};
    
//export default 
withAuthenticationRequired(CreateProduct, {
    returnTo: () => '/item/CreateProduct',
});