const express = require('express'),
      app     = express(),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      // Blog = require('./models/posts'),
      bodyParser = require('body-parser');

const homeRoutes = require('./routes/home'),
      blogRoutes = require('./routes/blogs');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog', {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// creates a new post manually
// Post.create({
//       post: 'This is Awesome!',
//       author: 'Emerson'
//       },
//       (err, post) => {
//             if(err) {
//                   console.log(err);
//             } else {
//                   console.log('newly created post');
//             }
//       }
// );

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
  img: String
});

const Blog = mongoose.model('Blog', postSchema);

Blog.find({},(error, posts) => {
  if(error) {
    console.log(`something went wrong ${error}`);
  } else {
    console.log(posts);
  }
});

app.use(homeRoutes);
app.use(blogRoutes);

const port = 4000;
app.listen(process.env.PORT || port, () => { 
  console.log(`Server is up on port ${port}`);
});