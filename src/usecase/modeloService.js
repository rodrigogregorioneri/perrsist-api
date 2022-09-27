const repository = require("../infra/database/repository/adicionarItem");

exports.adicionarItem = (id, nome) =>{
    repository.adicionarItem(id, nome)
}