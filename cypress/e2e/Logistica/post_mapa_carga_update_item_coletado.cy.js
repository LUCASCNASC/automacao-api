// /v3/mapa_carga_update_item_coletado - Atualizar quantidade coletada
// Atualizar quantidade coletada mapa de carga por item

import reqBody_post_mapa_carga_update_item_coletado from '../../fixtures/logistica/post_mapa_carga_update_item_coletado.json'

describe('Logística - POST - /v3/mapa_carga_update_item_coletado', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_update_item_coletado', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_mapa_carga_update_item_coletado
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });