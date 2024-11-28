// /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga} - Dados complementares do login
// Excluir mapa de carga cliente e/ou retirar pedido do mapa de carga

describe('Logística - DELETE - /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCarga: "",
        idFilialPedido: "",
        idPedidoVenda: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url: '/Log%C3%ADstica/v3_delete_logistica_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });