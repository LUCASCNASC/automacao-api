// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/bloqueto', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_bloqueto,
        failOnStatusCode: false
      })
        .then((response) => {
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