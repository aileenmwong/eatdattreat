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

// get all the recipe posts
postRoutes.get('/recipes', postController.indexRecipes);

// get all the treat posts
postRoutes.get('/treats', postController.indexTreats);

// get the about page
postRoutes.get('/about', postController.about);

// get the contact page
postRoutes.get('/contact', postController.contact);

// get the edit page
postRoutes.get('/:id/edit', postController.edit);

// get one post
postRoutes.get('/:id', postController.show);

// update one post
postRoutes.put('/:id', postController.update);

// delete one post
postRoutes.delete('/:id', postController.delete);

// create one post
postRoutes.post('/', postController.create);


// get all the posts
postRoutes.get('/', postController.index);


// export the router
module.exports = postRoutes;
