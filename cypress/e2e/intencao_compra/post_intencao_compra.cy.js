// /v3/intencao_compra - Intenção compra
// Incluir intenção de compra

describe('Intenção compra - POST - /v3/intencao_compra', () => {
    const url = 'http://localhost:8091/sabium#/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post2';
  
    it('POST - /v3/intencao_compra - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });