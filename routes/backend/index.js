var express = require('express');
var router = express.Router();

/* GET users listing. */

router.use('/dashboard', require('./dashboard'));
router.use('/book', require('./book'));
router.use('/', require('./home'));
router.use('/login', require('./login'));



module.exports = router;
