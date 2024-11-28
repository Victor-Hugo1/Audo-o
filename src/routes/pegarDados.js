var express = require("express");
var router = express.Router();

var pegarDadosController = require("../controllers/pegarDadosController");

router.post("/pegarDados", function (req, res) {
    pegarDadosController.pegar3MaioresPontuacoesController(req, res);
});

router.post("/maiorPontuacao", function (req, res) {
    pegarDadosController.MaiorPontuacaoController(req, res);
});

router.post("/qtdVezesJogadas", function (req, res) {
    pegarDadosController.qtdVezesJogadasController(req, res);
});

module.exports = router;