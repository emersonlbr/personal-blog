const express = require('express'),
      mongoose = require('mongoose'),
      methodOverrride = require('method-override'),
      bodyParser  = require('body-parser');


mongoose.connect('mongodb://localhost/blogs', ({useMongoClient: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverrride('_method'));

