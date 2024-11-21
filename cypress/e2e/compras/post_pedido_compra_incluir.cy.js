// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF

describe('Compras - POST - /v3/pedido_compra_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Compras/v3_post_pedido_compra_incluir';
  
    it('POST - /v3/pedido_compra_incluir - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });