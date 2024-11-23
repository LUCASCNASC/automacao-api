// /v3/estornar_baixa_pedido - Estorno da baixar pedido
// Estornar baixa do pedido de venda pelo TOTEM

describe('Financeiro - POST - /v3/estornar_baixa_pedido', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_estornar_baixa_pedido';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/estornar_baixa_pedido - Resposta 200', () => {
      const requestBody = {
        "idfilial": 0,
        "idpedidovenda": 0
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });