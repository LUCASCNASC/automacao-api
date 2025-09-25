// /v3/mapa_carga_update_item_coletado - Atualizar quantidade coletada
// Atualizar quantidade coletada mapa de carga por item
//200 - OK
//204 - Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_update_item_coletado', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Logística/v3_post_mapa_carga_update_item_coletado`, 
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