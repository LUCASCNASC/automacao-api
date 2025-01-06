// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', () => {
  const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_situacao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idmensagempadraopropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('mensagem');
        });
    });
  });