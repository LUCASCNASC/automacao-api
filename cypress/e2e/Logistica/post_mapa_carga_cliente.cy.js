// /v3/mapa_carga_cliente - Dados de Mapa de Carga Cliente
// Incluir/alterar cadastro de mapa de carga cliente

import reqBody_post_mapa_carga_cliente from '../../fixtures/logistica/post_mapa_carga_cliente.json'

describe('Logística - POST - /v3/mapa_carga_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_mapa_carga_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });