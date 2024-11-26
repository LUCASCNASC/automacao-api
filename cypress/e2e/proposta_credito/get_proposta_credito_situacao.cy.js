// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Proposta%20cr%C3%A9dito/v2_proposta_credito_situacao';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/proposta_credito_situacao/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }
      // Realiza a requisição GET
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