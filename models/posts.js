// require the configuration
const db = require('../db/config');

// create an empty object to push the function that the model is using into
const Post = {};

// find all posts
Post.findAll = () => {
  return db.query(`SELECT * FROM posts`);
}

Post.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM posts
    WHERE id = $1
    `, [id]);
}

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
}


module.exports = Post;
