// /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga} - Dados complementares do login
// Excluir mapa de carga cliente e/ou retirar pedido do mapa de carga

import acess_token from '../../fixtures/token.json'

describe('Logística - DELETE - /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga}', () => {
  const url = '/Log%C3%ADstica/v3_delete_logistica_mapa_carga_cliente';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCarga: "",
        idFilialPedido: "",
        idPedidoVenda: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });