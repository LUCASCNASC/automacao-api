// /v3/pedido_detalhes/{codigo} - Pedido detalhes
// Detalhes do pedido

describe('Pedido - GET - /v3/pedido_detalhes/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_detalhes';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/pedido_detalhes/{codigo} - Resposta 200', () => {
      const requestBody = {
        isFilial: "",
        codigo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody}
      )
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });