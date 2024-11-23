// /v3/pedido_fechar_baixar_caixa - Baixar Pedido Caixa
// Fecha o pedido caso necessário, e se forem adicionados itens para baixar efetua a baixa tanto integral quanto parcial

describe('Financeiro - POST - /v3/pedido_fechar_baixar_caixa', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pedido_fechar_baixar_caixa - Resposta 200', () => {
      const requestBody = {
        "idfilial": 0,
        "idpedidovenda": 0,
        "datapagamento": "string",
        "tipodocumentoemissao": 0,
        "copiarecibopagamento": "string",
        "gerarpedidoloja": false,
        "chavemd5": "string",
        "contratofinanceira": "string",
        "cartoes": [
          {
            "idtipotef": 0,
            "nsu": "string",
            "nsuhost": "string",
            "copiarecibo": "string",
            "valor": 0,
            "autorizacao": "string",
            "modalidade": "string",
            "instituicao": "string",
            "bandeira": "string",
            "idinstituicao": 0,
            "idbandeira": 0,
            "idoperadora": 0,
            "operacaoTef": 0
          }
        ],
        "carteiradigital": [
          {
            "idtipotef": 0,
            "idcarteiradigital": 0,
            "valor": 0,
            "nsu": "string",
            "nsuhost": "string",
            "copiarecibo": "string",
            "autorizacao": "string",
            "modalidade": "string",
            "instituicao": "string",
            "bandeira": "string",
            "operadora": "string",
            "operacaoTef": 0
          }
        ],
        "cheques": [
          {
            "iditemabatimento": 0,
            "numeroparcela": 0,
            "banco": "string",
            "agencia": "string",
            "conta": "string",
            "cheque": "string",
            "cmc7": "string"
          }
        ],
        "parcial": [
          {
            "iditembase": 0
          }
        ],
        "itensServico": [
          {
            "idItemServico": 0,
            "cartaoValePresente": "string",
            "cartao": {
              "idtipotef": 0,
              "nsu": "string",
              "nsuhost": "string",
              "copiarecibo": "string",
              "valor": 0,
              "autorizacao": "string",
              "modalidade": "string",
              "instituicao": "string",
              "bandeira": "string",
              "operadora": "string",
              "operacaoTef": 0
            },
            "carteiradigital": {
              "idtipotef": 0,
              "idcarteiradigital": 0,
              "valor": 0,
              "nsu": "string",
              "nsuhost": "string",
              "copiarecibo": "string",
              "autorizacao": "string",
              "modalidade": "string",
              "instituicao": "string",
              "bandeira": "string",
              "operadora": "string",
              "operacaoTef": 0
            }
          }
        ],
        "mapaCargaCliente": [
          {
            "idFilialMapa": 0,
            "idMapaCarga": 0,
            "idFilialPedido": 0,
            "idPedidoVenda": 0,
            "produtos": [
              {
                "idItemBase": 0
              }
            ]
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url,
        //headers: { authorization }, 
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });