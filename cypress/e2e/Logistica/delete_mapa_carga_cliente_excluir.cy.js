// /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga} - Dados complementares do login
// Excluir mapa de carga cliente e/ou retirar pedido do mapa de carga

describe('Logística - DELETE - /v3/mapa_carga_cliente_excluir/{idFilial}/{idMapaCarga}', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_delete_logistica_mapa_carga_cliente';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
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
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });