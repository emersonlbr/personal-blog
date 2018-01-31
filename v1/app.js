const express  = require('express'),
      ejs      = require('ejs'),
      bodyParser = require('body-parser'),
      Blog     = require('./models/blog');

const app   = express(),
      port  = 5000; 


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  
  Blog.find({},(error, blogs) => {
    if(error) {
      console.log(`something went wrong ${error}`);
    } else {
      // console.log(blogs);
      res.render('home', {blogs: blogs});
    }
  });
});

// findById or find({'_id': 'id'})
app.get('/posts/:id', (req, res) => {
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



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up on port ${port}`);
});