var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("pages/frontend/login_form", { pageTitle: "Login", layout:false });
});

module.exports = router;
