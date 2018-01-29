const express  = require('express'),
      ejs      = require('ejs'),
      Blog     = require('./models/blog');

const app   = express(),
      port  = 5000;

// mongoose.connect('mongodb://localhost/blog_v1', {useMongoClient: true});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  
  Blog.find({},(error, blogs) => {
    if(error) {
      console.log(`something went wrong ${error}`);
    } else {
      console.log(blogs);
      res.render('home', {blogs: blogs});
    }
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up on port ${port}`);
});