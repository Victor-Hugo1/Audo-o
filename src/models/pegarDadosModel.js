var database = require("../database/config")

function pegar3MaioresPontuacoes() {
    var instrucaoSql = `
            select 
            maiorPontuacao,
            usuario.nome
            from pontuacao join usuario
            on fkUsuario = idUsuario
            order by maiorPontuacao desc limit 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    pegar3MaioresPontuacoes
};