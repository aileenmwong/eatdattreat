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

// create function needs work
Post.create = post => {
  console.log('inside of create function')
  return db.one(
    `
    INSERT INTO posts
    (name, created_at, image, content)
    VALUES ($/name/, $/created_at/, $/image/, $/content/)
    RETURNING *
    `, [post.name, post.created_at, post.image, post.content]
    );
}

Post.update = (post, id) => {
  return db.one(`
    UPDATE posts SET
    name = $1,
    created_at = $2,
    image = $3,
    content = $4
    WHERE id = $5
    RETURNING *
    `, [post.name, post.created_at, post.image, post.content]);
}

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
}


module.exports = Post;
