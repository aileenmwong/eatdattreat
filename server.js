const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

//MIDDLEWARE
//require bodyParser
const bodyParser = require('body-parser');
//require path
const path = require('path');
//require Method Override
const methodOverride = require('method-override');

// require the model
const Post = require('./models/posts');

//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// index route
app.get('/', (req, res) => {
  res.render('blog-home');
});

// about route
app.get('/about', (req, res) => {
  res.render('blog-about');
});

// require the router
const postRoutes = require('./routes/post-routes');
app.use('/posts', postRoutes);

// set the views so ejs can be rendered
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// require public folder so anything placed in public folder can be used
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));

//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})
