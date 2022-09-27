const connect = require("../dynamo");

exports.adicionarItem = (id, nome) => {
    let conexao = connect;
    
    connect().transactWrite({
        TableName: process.env.MODELO_TABLE,
        Item: {
            modeloId: {
                S: id,
            },
            nome: {
                S: nome,
            },
        }
    })
}