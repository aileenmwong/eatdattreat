// require the configuration
const db = require('../db/config');

// create an empty object to push the function that the model is using into
const Post = {};

// find all posts
Post.findAll = () => {
  return db.query('SELECT * FROM posts');
}



module.exports = Post;
