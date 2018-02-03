const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_v', {useMongoClient: true});

// Schema
const blogSchema = new mongoose.Schema({
  title: String,
  text: String,
  subtitle: String,
  created: {type: Date, default: Date.now}
});

// compiled into a model
const Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//   title: 'Connect a node app to MongoDB',
//   text: "<h4> The probmle </h4> <p> I always liked to code. After about for six months of learning I had built quite a few apps like a weather app (cause who hasn’t?), random quote machine, budget app, todo list app and many static webpages and others. Working on projects was always cool to me, being able to make something is one o the reasons I always liked coding. </p> <p>One day though, while working on the intermediate front end projects on Free Code Camp, specifically the Wikipedia Viewer, something different happened. While working on it it was just as fun as the others, struggling to figure out how to the this and that, but eventually making it work. Nothing new here.</p> <h4> How to solve it </h4> <p>When the project was completed and I was checking if all the features were working correctly I felt something different, being able to type anything on that input and receive and answer related to the topic made me feel like I could do anything, so for the rest of the day I was thinking about how amazing I was able to create such an app. That was when I really realized I could build anything I wanted.</p><p>Being a coder doesn’t mean you know everything in a language/framework, but it’s about how you look for the information you need, how you deal when something in your app isn’t working and you have no idea how to solve it it’s about searching, asking for help, changing this line, or that other one to see what happens and eventually getting it right. That what most beginners fail to understand, it happened to me when I was starting out.</p><p>If you’re a beginner I highly recommend you to take CS50 course on Edx and follow the Free Code Camp map, their all free and extremely helpful if you’re starting, and don’t give up!</p>",
//   subtitle: "It's hard to start when you are a beginner but it doesn't mean that you must give up"
// },(error, blog) => {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(blog);
//   }
// });

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


      Add code to the Post
                  <code>
                    <div class='code'>
                      router.get('/', (req, res) => {
                      <br>
                        
                      &nbsp; Blog.find({},(error, blogs) => { <br>
                      &nbsp;   if(error) {<br>
                      &nbsp;  &nbsp;console.log(`something went wrong ${error}`);<br>
                      &nbsp;    } else {<br>
                      &nbsp;    &nbsp;// console.log(blogs);<br>
                      &nbsp;    &nbsp; res.render('home', {blogs: blogs});<br>
                      &nbsp;    }<br>
                      &nbsp;  });<br>
                      });<br>
                    </div>
                  </code>
*/