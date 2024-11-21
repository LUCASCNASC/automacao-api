// /v3/proposta_credito_agrupar - Proposta crédito
// Agrupar proposta crédito

describe('Proposta crédito - POST - /v3/proposta_credito_agrupar', () => {
    const url = 'http://localhost:8091/sabium#/Proposta%20cr%C3%A9dito/v2_proposta_credito_agrupar';
  
    it('POST - /v3/proposta_credito_agrupar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });