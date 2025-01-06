// /v3/pos_venda_qualificacao - Qualificações Pós-venda
// listas de qualificações da pós-venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pós-venda - GET - /v3/pos_venda_qualificacao', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idqualificacao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });