const Post = require('../models/posts');

const postController = {};

postController.index = (req, res) => {
  Post.findAll()
  .then(posts => {
    res.render('./blog-home', {
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

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

postController.create = (req, res) => {
  Post.create({
    name: req.body.name,
    created_at: req.body.created_at,
    image: req.body.image,
    content: req.body.content,
  })
  .then(post => {
    res.json({
      message: 'Post added successfully',
      data: post,
    });
  })
  .catch(err => {
    res.status(500).json(err);
  });
}

postController.update = (req, res) => {
  Post.update({
    name: req.body.name,
    created_at: req.body.created_at,
    image: req.body.image,
    content: req.body.content,
  }, req.params.id).then(post => {
    res.json({
      message: 'Post updated successfully',
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
      message: 'Post deleted successfully',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = postController;
