// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/bloqueto', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        body: reqBody_post_bloqueto,
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('gerado');
          expect(response.body.retorno[0]).toHaveProperty('jaIncluso');
          expect(response.body.retorno[0]).toHaveProperty('quitado');
          expect(response.body.retorno[0]).toHaveProperty('processoNaoGera');
          expect(response.body.retorno[0]).toHaveProperty('clienteNaoGera');
        });
    });
  });