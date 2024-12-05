// /v3/faturamento_mapa_carga_cliente - Dados do mapa de carga cliente
// Fatura pedidos de venda que estão em um mapa de carga cliente, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

import reqBody_post_faturamento_mapa_carga_cliente from '../../fixtures/logistica/post_faturamento_mapa_carga_cliente.json'
import acess_token from '../../fixtures/token.json'

describe('Logística - POST - /v3/faturamento_mapa_carga_cliente', () => {
    const url = '/Log%C3%ADstica/v3_post_logistica_faturamentomapacargacliente';
    const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_faturamento_mapa_carga_cliente,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });