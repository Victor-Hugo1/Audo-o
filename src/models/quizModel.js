var database = require("../database/config")

function enviarPontuacao(Introversao, Sensivel, Curiosa, Energetica, idUsuario) {

    var instrucaoSql = `
        INSERT INTO personalidade (Personalidades, compatibilidade,fkUsuario) VALUES 
        ('Introversão',${Introversao},${idUsuario}),
        ('Sensível',${Sensivel},${idUsuario}),
        ('Curiosa',${Curiosa},${idUsuario}),
        ('Energética',${Energetica},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarPersonalidades(idUsuario) {
    var instrucaoSql = `
    select Personalidades,
    compatibilidade
    from personalidade join usuario
    on fkUsuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiPersonalidade(idUsuario) {
    var instrucaoSql = `
    select Personalidades,
    compatibilidade
    from personalidade join usuario
    on fkUsuario = ${idUsuario}
    order by compatibilidade desc limit 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    enviarPontuacao,
    pegarPersonalidades,
    kpiPersonalidade
};