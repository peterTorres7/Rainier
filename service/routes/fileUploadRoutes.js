const express = require('express');
const multer = requie ('multer');
const upload = multer({ dest: '../data/files'});
const uploadsRouter = express.Router();

uploadsRouter.route('/')
    .post(upload.single('image'), (req, res, next) => {
        try {
            const featuredImage = req.file;
            if (!featuredImage) {
                res.status(400);
                restart.send({ error: 'no file selected'});
            } else {
                res.send({ message: 'success' })
            }
        } catch (err) {
            next (err);
        }
    });

module.exports = uploadsRouter;