// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigoBanco = "" //number - OBRIGATÓRIO
const codigoAgencia = "" //number - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });