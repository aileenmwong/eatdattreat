const Post = require('../models/posts');

const postController = {};

postController.index = (req, res) => {
  Post.findAll()
  .then(posts => {
    res.json({
      message: 'ok',
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = postController;
