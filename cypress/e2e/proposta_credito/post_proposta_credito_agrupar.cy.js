// /v3/proposta_credito_agrupar - Proposta crédito
// Agrupar proposta crédito

describe('Proposta crédito - POST - /v3/proposta_credito_agrupar', () => {
    const url = 'http://localhost:8091/sabium#/Proposta%20cr%C3%A9dito/v2_proposta_credito_agrupar';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/proposta_credito_agrupar - Resposta 200', () => {
      const requestBody = {
        "propostaCredito": [
          {
            "item": 0,
            "filial": 0,
            "propostaCredito": 0,
            "idSituacaoProposta": 0,
            "processoVenda": "string",
            "processoAReceber": "string",
            "pedidoVenda": "string",
            "cliente": "string",
            "idVendedor": "string",
            "quantidadeParcelas": 0,
            "idEntidadeFinanceira": 0,
            "situacaoPedidoVenda": "string",
            "vencimentosPedidoVenda": "string",
            "fiador": "string",
            "idmensagempadraopropostacredito": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });