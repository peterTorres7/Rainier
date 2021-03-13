const express = require('express');
const multer = require ('multer');
const upload = multer({ dest: '../uploads/productsImg'});
const uploadsRouter = express.Router();

uploadsRouter.route('/')
    .post(upload.single('featuredImage'), (req, res, next) => {
        try {
            const featuredImage = req.file;
            if (!featuredImage) {
                res.status(400);
                res.send({ error: 'no file selected'});
            } else {
                res.send({ message: 'success' });
            }
        } catch (err) {
            next (err);
        }
    });

module.exports = uploadsRouter;