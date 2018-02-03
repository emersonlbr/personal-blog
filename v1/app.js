const express       = require('express'),
      Router        = require('./routes/routes'),
      ejs           = require('ejs');
      

const app   = express(),
      port  = 5000; 


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(Router);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up on port ${port}`);
});