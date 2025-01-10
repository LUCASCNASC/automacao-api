// /v3/referenciabancaria - Inclusão de refência bancária
// Incluir referência bancária
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/referenciabancaria', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Financeiro/v3_financeiro_referencia_bancaria1`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('idCnpjCpf');
          expect(response.body.retorno[0]).toHaveProperty('idReferenciaBancaria');
        });
    });
  });