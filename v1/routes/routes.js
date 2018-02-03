const express = require('express'),
      Blog    = require('../models/blog');
      bodyParser = require('body-parser'),
      router  = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  
  Blog.find({},(error, blogs) => {
    if(error) {
      console.log(`something went wrong ${error}`);
    } else {
      // console.log(blogs);
      res.render('home', {blogs: blogs});
    }
  });
});

router.get('/posts/new', (req, res) => {
  res.render('new');
});

router.post('/posts', (req, res) => {
  Blog.create(req.body.post, (error, newBlog) => {
    if (error) {
      res.render('new');
    } else {
      // redirect to index
      res.redirect('/');
    }
  });
});


// findById or find({'_id': 'id'})
router.get('/posts/:id', (req, res) => {
  Blog.findById(req.params.id, (error, foundPost) => {
    if(error) {
      console.log('ops' + error);
      console.log(req.params.id);
    } else {
      res.render('posts', {post: foundPost});
      console.log(req.params.id);
    }
  });
});




// mas não seja mais um iludido

module.exports = router;