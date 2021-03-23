const express = require('express');
const productRouter = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const ProductList  = require("../models/Product");
const productController = require('../controllers/productsController');

productRouter.route('/')
  // Get all products
  .get((req, res, next) => {
    ProductList.find({}, (err, products) => {
      if (err) { 
        next(err);
      } else {
        res.send(products);
      }
    });
  })

productRouter.route('/:id')
  // Get a single product by id
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
  
productRouter.route('/')
  .post((req, res, next) => {
    const { permissions } = req.user;
    console.log('permissions: ', permissions);
    if (permissions.includes('createProducts')) {
      next();
    } else {
      res.sendStatus(403);
    }
  }, productController.createProduct);

module.exports = productRouter;


  
