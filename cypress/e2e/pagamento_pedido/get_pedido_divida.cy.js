// /v3/pedido_divida/{filial} - Pedidos
// Lista pedidos para pagamento no TOTEM

describe('Pagamento pedido - GET - /v3/pedido_divida/{filial}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_divida';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/pedido_divida/{filial} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        termo: "",
        idtipotef: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });