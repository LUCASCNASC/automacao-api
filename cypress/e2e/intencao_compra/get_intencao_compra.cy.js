// /v3/intencao_compra - Intenções de compras
// Lista intenções de compras

describe('Intenção compra - GET - /v3/intencao_compra', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/intencao_compra - Resposta 200', () => {
      const requestBody = {
        "idintencaocompra": 0,
        "codigo": "string",
        "nomecliente": "string",
        "dtregistrado": "string"
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post1', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });