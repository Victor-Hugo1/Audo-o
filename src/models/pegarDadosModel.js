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


function MaiorPontuacao(idUsuario) {
    var instrucaoSql = `
           select 
            maiorPontuacao as PontuacaoUsuario,
            usuario.nome
            from pontuacao join usuario
            on fkUsuario = idUsuario
            where idUsuario = ${idUsuario}
            order by maiorPontuacao desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



function qtdVezesJogadas(idUsuario){
    var instrucaoSql = `
           select sum(qtdVezesJogadas) as totalVezesJogadas
            from pontuacao
            where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

module.exports = {
    pegar3MaioresPontuacoes,
    MaiorPontuacao,
    qtdVezesJogadas
};