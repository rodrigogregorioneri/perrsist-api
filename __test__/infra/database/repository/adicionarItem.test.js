const { assert, expect } = require("chai");
const sinon = require("sinon");
const Repository = require("../../../../src/infra/database/repository/adicionarItem");
const Dynamo = require("../../../../src/infra/database/dynamo");

var context;

describe('adicionarItem', () => {

    let dynamo;
    beforeEach(function () {
        // dynamo = sinon.stub(Dynamo, 'connect');
    })
  
    afterEach(function () {
      sinon.restore();
    })

    it("Deve executar com sucesso", async () =>{
        let data = {}
        const resposta = await Repository.adicionarItem("teste","teste")
        console.log("Retorno da resposta"+ JSON.stringify(resposta))
        // expect(dynamo.calledOnce).to.be.true;
        // expect(200).equals((await resposta).statusCode)
    })
    test("Deve executar com Erro", async () => {
      let data = {}
      const resposta = await Repository.adicionarItem(null, null);
      console.log("Retorno da resposta" + JSON.stringify(resposta))
    //   expect(dynamo.calledOnce).to.true;
    //   expect(400).equals((await resposta).statusCode)
    });




})