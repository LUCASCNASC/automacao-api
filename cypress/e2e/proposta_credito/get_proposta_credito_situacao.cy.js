// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Proposta%20cr%C3%A9dito/v2_proposta_credito_situacao';
  
    it('GET - /v3/proposta_credito_situacao/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });