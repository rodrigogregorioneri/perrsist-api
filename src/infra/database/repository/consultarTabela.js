const connect = require("../dynamo");

exports.consultarTabela = (id, nome) => {
    let conexao = connect;
    
    connect().get(id);
}