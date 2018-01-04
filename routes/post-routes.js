// require express
const express = require('express');
// require the router
const postRoutes = express.Router();

// require the controller
const postController = require('../controllers/post-controller.js');

// get all the posts
postRoutes.get('/', postController.index);

// export the router
module.exports = postRoutes;
