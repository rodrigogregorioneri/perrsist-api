const { assert, expect } = require("chai");
const sinon = require("sinon");
const ModeloService = require("../../src/usecase/modeloService");
const Repository = require("../../src/infra/database/repository/adicionarItem");

var context;

describe('modeloService', () => {

    let repository;
    beforeEach(function () {
      repository = sinon.stub(Repository, 'adicionarItem');
    })
  
    afterEach(function () {
      sinon.restore();
    })

    it("Deve executar com sucesso", async () =>{
        let data = {}
        const resposta = await ModeloService.adicionarItem("teste","teste")
        console.log("Retorno da resposta"+ JSON.stringify(resposta))
        expect(repository.calledOnce).to.be.true;
        // expect(200).equals((await resposta).statusCode)
    })
    test("Deve executar com Erro", async () => {
      let data = {}
      const resposta = await ModeloService.adicionarItem(null, null);
      console.log("Retorno da resposta" + JSON.stringify(resposta))
      expect(repository.calledOnce).to.true;
    //   expect(400).equals((await resposta).statusCode)
    });




})