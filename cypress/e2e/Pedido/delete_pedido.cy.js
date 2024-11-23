// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda

describe('Pedido - DELETE - /v3/pedido/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_get_delete2';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/pedido/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: "",
        idfilial: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });