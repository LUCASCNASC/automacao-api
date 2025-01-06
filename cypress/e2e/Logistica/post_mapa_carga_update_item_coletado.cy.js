// /v3/mapa_carga_update_item_coletado - Atualizar quantidade coletada
// Atualizar quantidade coletada mapa de carga por item

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_update_item_coletado', () => {
  const url = '/Log%C3%ADstica/v3_post_mapa_carga_update_item_coletado';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_mapa_carga_update_item_coletado,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });