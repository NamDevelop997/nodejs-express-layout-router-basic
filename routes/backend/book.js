var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./pages/backend/book', {pageTitle: "List book",});
});

router.get('/add', function(req, res, next) {
  res.render('./pages/backend/book/add', {pageTitle: "Page add book",});
});

module.exports = router;
