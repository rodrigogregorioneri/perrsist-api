const { assert, expect } = require("chai");
const sinon = require("sinon");
const Handler = require("../../src/entrypoint/handler.js");
const ModeloService = require("../../src/usecase/modeloService");

var context;

describe("lambdaHandler", () => {
  let modeloService;
  beforeEach(function () {
    modeloService = sinon.stub(ModeloService, 'adicionarItem');
  })

  afterEach(function () {
    sinon.restore();
  })

  it("Deve executar com sucesso", async () =>{
      let data = {}
      const resposta = Handler.lambdaHandler(data, context);
      console.log("Retorno da resposta"+ JSON.stringify(resposta))
      expect(modeloService.calledOnce).to.be.true;
      expect(200).equals((await resposta).statusCode)
  })
  test("Deve executar com Erro", async () => {
    let data = {}
    const resposta = await Handler.lambdaHandler(null, context);
    console.log("Retorno da resposta" + JSON.stringify(resposta))
    expect(modeloService.calledOnce).to.false;
    expect(400).equals((await resposta).statusCode)
  });
})