const express = require('express'),
      mongoose = require('mongoose'),
      Blog = require('../models/posts'),
      router  = express.Router();

mongoose.connect('mongodb://localhost/blog', {useMongoClient: true});

router.get('/posts', (req, res) => {
  Blog.find({}, function (error, foundPosts) {
    if(error) {
      console.log(error);
    } else {
      res.render('posts', {posts: foundPosts});
      console.log(foundPosts);
    }
  });
});

// app.get('/blogs', function(req, res) {
//   Blog.find({}, function(err, blogs) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render('index', {blogs: blogs});
//     }
//   });
// });

router.post('/posts', (req, res) => {s
  // create blog

});


module.exports = router;