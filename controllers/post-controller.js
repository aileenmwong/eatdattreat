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

postController.indexRecipes = (req, res) => {
  console.log('inside Recipes Controller')
  Post.findAllRecipes()
  .then(posts => {
    res.render('./blog-recipes', {
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

postController.indexTreats = (req, res) => {
  console.log('inside Treats Controller')
  Post.findAllTreats()
  .then(posts => {
    res.render('./blog-treats', {
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

postController.show = (req, res) => {
  Post.findById(req.params.id)
  .then(data => {
    res.render('./blog-single', {
      post: data,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

postController.create = (req, res) => {
  Post.create({
    name: req.body.name,
    tagline: req.body.tagline,
    author: req.body.author,
    created_at: req.body.created_at,
    image: req.body.image,
    thumbnail: req.body.thumbnail,
    content1: req.body.content1,
    content2: req.body.content2,
    quote: req.body.quote,
    link: req.body.link,
    tag: req.body.tag
  })
  .then(posts => {
    res.redirect('/posts');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

postController.edit = (req, res) => {
  Post.findById(req.params.id)
  .then(posts => {
    res.render('./blog-update', {
      data: posts,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

postController.update = (req, res) => {
  Post.update({
    name: req.body.name,
    tagline: req.body.tagline,
    author: req.body.author,
    created_at: req.body.created_at,
    image: req.body.image,
    thumbnail: req.body.thumbnail,
    content1: req.body.content1,
    content2: req.body.content2,
    quote: req.body.quote,
    link: req.body.link,
    tag: req.body.tag
  }, req.params.id)
  .then(posts => {
    res.redirect('/posts');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

postController.about = (req, res) => {
    res.render('./blog-about', {
  })
  .catch(err => {
    res.status(500).json(err);
  });
}

postController.contact = (req, res) => {
    res.render('./blog-contact', {
  })
  .catch(err => {
    res.status(500).json(err);
  });
}

postController.delete = (req, res) => {
  Post.destroy(req.params.id)
  .then(() => {
    res.redirect('/posts');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = postController;
