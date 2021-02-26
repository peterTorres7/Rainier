const express = require('express');
const productRouter = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const ProductList  = require("../models/Product");

productRouter.route('/')
  // Get all transactions
  .get((req, res, next) => {
    ProductList.find({}, (err, products) => {
      if (err) { 
        next(err) 
      } else {
        res.send(products);
    }
  });
});
  
  //DUPLICATED BELOW
  // .post((req, res, next) => {
  //   ProductList.create(req.body, (err, newProduct) => {
  //     if (err) { 
  //       next(err); 
  //     } else if (newProduct) {
  //         res.status(200);
  //         res.send(newProduct);
  //     } else {
  //         res.status(404);
  //         res.send(`Sorry, product ${req.params.name} already exists.`);
  //       }
  //     });
  //   })
  
  // ;

productRouter.route('/:name')

  // Get a single product by name
  .get((req, res, next) => {
    ProductList.findById(req.params.id, (err, product) => {
          if (err) {
            next(err);
          } else if (product) {
            res.send(product);
          } else {
            res.status(404);
            res.send(`Sorry, product ${req.params.name} does not exist.`);
          }
        });
      })

  //Creates new product
  // .post((req, res, next) => {
  //   ProductList.create(req.body, (err, newProduct) => {
  //     if (err) { 
  //       next(err); 
  //     } else if (newProduct) {
  //         res.status(200);
  //         res.send(newProduct);
  //     } else {
  //         res.status(404);
  //         res.send(`Sorry, product ${req.params.name} already exists.`);
  //       }
  //     });
  //   })

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
          res.json({success: true, msg: 'Success! Updated product: '+ req.params.name});
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
        res.json({success: true, msg: 'Success! Deleted product: '+ req.params.name});
      } else {
        res.status(404);
        res.send(`Sorry, product ${req.params.name} does not exist.`);
      }
    });
  });
    
  const jwtCheck = jwt({
    sectret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequrestsPerMinute: 5,
      jwksUri: 'dev-chq8gp3f.us.auth0.com'
    }),
    audience: '',
    issuer: '',
    algorithms: '',
  })
  productRouter.use(jwtCheck);

  productRouter.route('/')
    .post((req, res, next) =>  {
      const { permissions } = req.user;
      if (permissions.includes('manage:products')) {
        next();
      } else {
        res.sendStatus(403);
      }
    }, productController.CreateProduct);

module.exports = productRouter;



  
