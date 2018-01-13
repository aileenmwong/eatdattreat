// require the configuration
const db = require('../db/config');

// create an empty object to push the function that the model is using into
const Post = {};

// find all posts
Post.findAll = () => {
  return db.query(`
    SELECT posts.id, name, created_at, image, content, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    `);
}

// find post by id
Post.findById = (id) => {
  return db.oneOrNone(`
    SELECT posts.id, name, created_at, image, content, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    WHERE posts.id = $1
    `, [id]);
}

// create function needs work
// create a new post
Post.create = posts => {
  posts.tag = Number.parseInt(posts.tag, 10)
  console.log('this is the post type -->', posts.tag);
  return db.one(
    `
    INSERT INTO posts
    (name, created_at, image, content, tag)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [posts.name, posts.created_at, posts.image, posts.content, posts.tag]
    );
}

// update a post
Post.update = (posts, id) => {
  posts.tag = Number.parseInt(posts.tag, 10)
  console.log(posts, id)
  return db.one(
    `
    UPDATE posts SET
    name = $1,
    created_at = $2,
    image = $3,
    content = $4
    tag = $5
    WHERE id = $6
    RETURNING *
    `, [posts.name, posts.created_at, posts.image, posts.content, posts.tag]
    );
}

// delete a post
Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
}


module.exports = Post;
