var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/enviarPontuacao", function (req, res) {
    quizController.enviarPontuacaoController(req, res);
});

router.post("/pegarPersonalidade", function (req, res) {
    quizController.pegarPersonalidadesController(req, res);
});

router.post("/kpiPersonalidade", function (req, res) {
    quizController.kpiPersonalidadeController(req, res);
});


module.exports = router;