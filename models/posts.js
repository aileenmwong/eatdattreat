// require the configuration
const db = require('../db/config');

// create an empty object to push the function that the model is using into
const Post = {};

// find all posts
Post.findAll = () => {
  return db.query(`
    SELECT posts.id, name, tagline, author, created_at, image, thumbnail, content1, content2, quote, link, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    `);
}

// find all recipe posts
Post.findAllRecipes = () => {
  console.log('inside Recipes Model');
  return db.query(`
    SELECT posts.id, name, tagline, author, created_at, image, thumbnail, content1, content2, quote, link, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    WHERE posts.tag = 1
    `);
}

// find all treat posts
Post.findAllTreats = () => {
  console.log('inside Treats Model');
  return db.query(`
    SELECT posts.id, name, tagline, author, created_at, image, thumbnail, content1, content2, quote, link, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    WHERE posts.tag = 2
    `);
}

// find post by id
Post.findById = (id) => {
  console.log('inside find by id model')
  return db.oneOrNone(`
    SELECT posts.id, name, tagline, author, created_at, image, thumbnail, content1, content2, quote, link, tag
    FROM posts INNER JOIN tags
    ON posts.tag = tags.id
    WHERE posts.id = $1
    `, [id]);
}

// create a new post
Post.create = posts => {
  posts.tag = Number.parseInt(posts.tag, 10)
  console.log('this is the post type -->', posts.tag);
  return db.one(
    `
    INSERT INTO posts
    (name, tagline, author, created_at, image, thumbnail, content1, content2, quote, link, tag)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `,
    [posts.name, posts.tagline, posts.author, posts.created_at, posts.image, posts.thumbnail, posts.content1, posts.content2, posts.quote, posts.link, posts.tag]
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
    tagline = $2,
    author = $3,
    created_at = $4,
    image = $5,
    thumbnail = $6,
    content1 = $7,
    content2 = $8,
    quote = $9,
    link = $10,
    tag = $11
    WHERE id = $12
    RETURNING *
    `, [posts.name, posts.tagline, posts.author, posts.created_at, posts.image, posts.thumbnail, posts.content1, posts.content2, posts.quote, posts.link, posts.tag, id]
    );
}

// delete a post
Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1
    `, [id]);
}

// export the model
module.exports = Post;
