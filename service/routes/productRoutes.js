const express = require('express');
const productRouter = express.Router();
const ProductList  = require("../models/Product");
const productController = require('../controllers/productsController')
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

productRouter.route('/')
  // Get all transactions
  .get((req, res, next) => {
    ProductList.find({}, (err, list) => {
      if (err) { 
        next(err) 
      }
      else {
        res.send(list)
      }
    });
  })
  .post(productController.createProduct);

productRouter.route('/:id')
  // Get a single product by name
  .get((req, res, next) => {
    ProductList.findById(req.params.id, (err, product) => {
          if (err) {
            next(err);
          } else if (product) {
            res.send(product);
          } else {
            res.status(404);
            res.send(`Sorry, product ${req.params.id} does not exist.`);
          }
        });
      })

  //Creates new product
  .post((req, res, next) => {
    ProductList.create(req.body, (err, newProduct) => {
      if (err) { 
        next(err); 
      } else if (newProduct) {
          res.status(200);
          res.send(newProduct);
      } else {
          res.status(404);
          res.send(`Sorry, product ${req.params.id} already exists.`);
        }
      });
    })

  //updates product
  .put((req, res, next) => {
    ProductList.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
      if (err) {
        next(err);
      } else if (product) {
        ProductsList.findById(req.params.id, (updateErr, updatedProduct) => {
          if (err) {
            next(updateErr)
          }
          res.send(updatedProduct);
          res.json({success: true, msg: 'Success! Updated product: '+ req.params.id});
        })
      } else {
        res.status(404);
        res.send(`Sorry, product ${req.params.id} does not exist.`);
      }
    });  
  })

  //Deletes product
  .delete((req, res, next) => {
    ProductList.findByIdAndDelete(req.params.id, (err, product) => {
      if (err) {
        next(err);
      } else if (product) {
        res.sendStatus(200);
        res.json({success: true, msg: 'Success! Deleted product: '+ req.params.id});
      } else {
        res.status(404);
        res.send(`Sorry, product ${req.params.id} does not exist.`);
      }
    });
  });


  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-chq8gp3f.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://rainier-api',
  issuer: 'https://dev-chq8gp3f.us.auth0.com/',
  algorithms: ['RS256']
  });
  
  productRouter.use(jwtCheck);
  
  //app.get('/authorized', function (req, res) {
    //  res.send('Secured Resource');
  //});
  
  productRouter.route('/')
  //DUPLICATED BELOW
  .post((req, res, next) => {
    ProductList.create(req.body, (err, newProduct) => {
      if (err) { 
        next(err); 
      } else if (newProduct) {
          res.status(200);
          res.send(newProduct);
      } else {
          res.status(404);
          res.send(`Sorry, product ${req.params.id} already exists.`);
        }
      });
    });

module.exports = productRouter;



  
