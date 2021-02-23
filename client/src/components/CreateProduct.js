import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    makeStyles,
    FormContorl,
    Input,
    InputLabel,
 } from "@material-ui/core";

 const defaultFormValues = {
     productName: "",
     productQty: '',
     productPrice: '',
     productUser: '',
     productDate: '',
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

     const handleInputChange = (event) => {
         const { name, value } = event.target;
         setProductFormValues({
             ...setProductFormValues,
            [name] : value,
         });
     };

     const handleSubmit = (event) => {
         event.preventDefault();
         const requestConfig = {
             url: "http://localhost:4000/api/v1/products/",
             method: "post",
             headers: { 'Content-Type' : 'application/json' },
             data: {
                 productName: productFormValues.productName,
                 qty: productFormValues.productQty,
                 price: productFormValues.price,
                 user: productFormValues.productUser,
                 date: productFormValues.productDate,
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
                <TextField class = {classes.root} placeholder="Product Name" value={productFormValues.productQty} onChange={handleInputChange} />
                <TextField class = {classes.root} placeholder="Product Quantity" value={productFormValues.productQty} />
                <TextField class = {classes.root} placeholder="Product Price" value={productFormValues.productPrice} />
                <TextField class = {classes.root} placeholder="Product User" value={productFormValues.productUser} />
                <TextField class = {classes.root} placeholder="Product Date" value={productFormValues.productDate} />
                <button class = {classes.formControl}  onClick={handleInputChange} >Submit new product for sale</button>
            </form>
        )
    }
};
