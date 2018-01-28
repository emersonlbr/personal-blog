const express  = require('express'),
      ejs      = require('ejs'),
      mongoose = require('mongoose');

const app   = express(),
      port  = 5000;

mongoose.connect('mongodb://localhost/v1', {useMongoClient: true});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up on port ${port}`);
});