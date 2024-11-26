var express = require("express");
var router = express.Router();

var pegarDadosController = require("../controllers/pegarDadosController");

router.post("/pegarDados", function (req, res) {
    pegarDadosController.pegar3MaioresPontuacoesController(req, res);
});

module.exports = router;