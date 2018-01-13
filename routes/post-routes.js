// require express
const express = require('express');
// require the router
const postRoutes = express.Router();

// require the controller
const postController = require('../controllers/post-controller.js');

// render the add page when clicking on the add new button
postRoutes.get('/add', (req, res) => {
  res.render('blog-add');
});

// get one post
postRoutes.get('/:id', postController.show);

// update one post
postRoutes.put('/:id', postController.update);

// delete one post
postRoutes.delete('/:id', postController.delete);

// get all the posts
postRoutes.get('/', postController.index);

// create one post
postRoutes.post('/', postController.create);

// export the router
module.exports = postRoutes;
