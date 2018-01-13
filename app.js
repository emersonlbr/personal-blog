const express = require('express'),
      app     = express(),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      Post = require('./models/posts'),
      bodyParser = require('body-parser');

const homeRoutes = require('./routes/home'),
      blogRoutes = require('./routes/blogs');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog', {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

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

app.use(homeRoutes);
app.use(blogRoutes);

const port = 4000;
app.listen(process.env.PORT || port, () => { 
  console.log(`Server is up on port ${port}`);
});