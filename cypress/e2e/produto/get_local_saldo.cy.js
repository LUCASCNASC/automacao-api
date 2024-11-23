// /v3/local_saldo - Local saldo
// Lista saldo do produto

describe('Produtos - GET - /v3/local_saldo', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v2_produto_local_saldo';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/local_saldo - Resposta 200', () => {
      const requestBody = {
        filial_saldo: "",
        sku: "",
        pedido: ""
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