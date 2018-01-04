const express = require('express');
const app = express();
const logger = require('morgan');

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
    res.send('Hello world!');
});

// // get anything that hasn't already been matched
// app.use('*', (req, res) => {
//     // send a response with status 404
//     res.status(404).send(err);
// });

//require the router
const postRoutes = require('./routes/post-routes');
app.use('/posts', postRoutes);

//assign port
const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})
