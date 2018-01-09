const express = require('express'),
      router  = express.Router();


router.get('/posts', (req, res) => {
  res.render('posts');
});


module.exports = router;