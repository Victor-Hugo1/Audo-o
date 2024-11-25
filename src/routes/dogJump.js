var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

router.post("/cadastrar", function (req, res) {
    gameController.cadastrar(req, res);
});

module.exports = router;