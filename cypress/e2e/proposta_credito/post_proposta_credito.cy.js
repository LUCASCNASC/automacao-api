// /v3/proposta_credito - Proposta crédito
// Enviar proposta crédito

describe('Proposta crédito - POST - /v3/proposta_credito', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/proposta_credito - Resposta 200', () => {
      const requestBody = {
        "item": 0,
        "filial": 0,
        "propostaCredito": 0,
        "idSituacaoProposta": 0,
        "processovenda": "string",
        "processoareceber": "string",
        "pedidovenda": "string",
        "cliente": "string",
        "idvendedor": "string",
        "quantidadeparcelas": 0,
        "identidadefinanceira": 0,
        "situacaopedidovenda": "string",
        "vencimentospedidovenda": "string",
        "fiador": "string",
        "idmensagempadraopropostacredito": 0
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET', 
        url: '/Proposta%20cr%C3%A9dito/v2_proposta_credito_post', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });