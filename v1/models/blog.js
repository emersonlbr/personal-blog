const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_v1', {useMongoClient: true});



// Schema
const blogSchema = new mongoose.Schema({
  autor: String,
  text: String,
  hastag: String
});

// compiled into a model
const Blog = mongoose.model('Blog', blogSchema);

// Exporting the model
module.exports = Blog;

/*
notes:
      callbacks in node (error, result) => {...},
      
      add to db
                const post1 = new Blog({
                  autor: "hello world",
                  text: "this is cool",
                  hastag: "#thisisawesome"
                });

                post1.save((error, blog) => {
                  if(error) {
                    console.log('something went wrong');
                  } else {
                    console.log('added to the db');
                    console.log(blog);
                  }
                });


      this is new and save all at once
                Blog.create({
                  autor: 'Emerson Lopes',
                  text: 'I love all the types of food',
                  hastag: '#cool'
                },(error, blog) => {
                  if(error) {
                    console.log(error);
                  } else {
                    console.log(blog);
                  }
                });


      retrieve the data 
                  Blog.find({},(error, blogs) => {
                    if(error) {
                      console.log(`something went wrong ${error}`);
                    } else {
                      console.log(blogs);
                    }
                  });
*/