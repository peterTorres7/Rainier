import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    makeStyles,
    FormContorl,
    Input,
    InputLabel,
    FilledInput
 } from "@material-ui/core";

 const defaultFormValues = {
     productName: '',
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
            [name] : value,
         });
     };

     const handleSubmit = (event) => {
         event.preventDefault();
         const requestConfig = {
             url: "http://localhost:4000/products/",
             method: "post",
             headers: { "ContentType": "application/json" },
             data: {
                 name: productFormValues.productName,
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
    } else {
        return (
            <form
                action={handleSubmit}
                class={classes.formControl}>
                Enter Details of Product for sale:
                <FilledInput class = {classes.root} placeholder="Product Name"/>
                <FilledInput class = {classes.root} placeholder="Product Quantity"/>
                <FilledInput class = {classes.root} placeholder="Product Price"/>
                <FilledInput class = {classes.root} placeholder="Product User"/>
                <FilledInput class = {classes.root} placeholder="Product Date"/>
                <button class = {classes.formControl} onClick = {handleInputChange}>Submit new product for sale</button>
            </form>
        )
    };
}