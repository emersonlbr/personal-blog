const express = require('express'),
      router  = express.Router();


router.get('/posts', (req, res) => {
  res.render('posts');
});

router.post('/posts', (req, res) {
  // create blog

});


module.exports = router;