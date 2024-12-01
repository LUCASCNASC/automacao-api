// /v3/faturamento_mapa_carga_loja - Dados de mapa de carga loja
// Faturar pedidos de loja que estão em um mapa de carga loja, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

import reqBody_post_faturamento_mapa_carga_loja from '../../fixtures/logistica/post_faturamento_mapa_carga_loja.json'


describe('Logística - POST - /v3/faturamento_mapa_carga_loja', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentomapacargaloja', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_faturamento_mapa_carga_loja
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });