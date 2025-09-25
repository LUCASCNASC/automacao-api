// /v3/pos_venda - Pós-venda
// Incluir contato de pós-venda
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pós-venda - POST - /v3/pos_venda', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Pós-venda/v3_pos_venda_get_post2`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });