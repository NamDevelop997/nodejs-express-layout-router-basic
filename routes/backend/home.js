var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/backend/home/', {pageTitle: "Dashboard",});
});

// router.get('/', function(req, res, next) {
//   res.render('backend', {layout: true, fullName: 'mv Nam'});
// });



module.exports = router;
