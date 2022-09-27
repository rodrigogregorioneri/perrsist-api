'use strict';
const ModeloService = require("../usecase/modeloService")

module.exports.lambdaHandler = async (event) => {
  try{
      ModeloService.adicionarItem(event.nome,event.id);
      const response = {
        statusCode: 200,
        body: "Success"
      }
      return response;
  }catch(error){
      return {
        statusCode: 400,
        body: error
      }
  }
};



