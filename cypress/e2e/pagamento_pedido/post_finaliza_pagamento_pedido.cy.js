// /v3/finaliza_pagamento_pedido - Finalizar pagamento
// Finalizar pagamento do pedido de venda pelo TOTEM. Pagamento feito no cartão. Utiliza o parâmetro de Empresa 422 - Conciliador TEF

describe('Financeiro - POST - /v3/finaliza_pagamento_pedido', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_finaliza_pagamento_pedido';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/finaliza_pagamento_pedido - Resposta 200', () => {
      const requestBody = {
        "idfilial": 0,
        "idpedidovenda": 0,
        "datapagamento": "string",
        "copiarecibopagamento": "string",
        "gerarpedidoloja": false,
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
            "operadora": "string",
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
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });