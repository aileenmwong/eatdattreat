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

postController.show = (req, res) => {
  Post.findById(req.params.id)
  .then(post => {
    res.json({
      message: 'ok',
      data: post,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

postController.delete = (req, res) => {
  Post.destroy(req.params.id)
  .then(() => {
    res.json({
      message: 'Quote deleted successfully',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = postController;
