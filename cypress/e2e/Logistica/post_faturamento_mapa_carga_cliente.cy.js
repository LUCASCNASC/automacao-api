// /v3/faturamento_mapa_carga_cliente - Dados do mapa de carga cliente
// Fatura pedidos de venda que estão em um mapa de carga cliente, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

import reqBody_post_faturamento_mapa_carga_cliente from '../../fixtures/logistica/post_faturamento_mapa_carga_cliente.json'

describe('Logística - POST - /v3/faturamento_mapa_carga_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentomapacargacliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_faturamento_mapa_carga_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });