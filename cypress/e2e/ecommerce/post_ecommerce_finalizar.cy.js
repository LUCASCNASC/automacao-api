// /v3/ecommerce_finalizar - Gerar pedido e-commerce
// Incluir/alterar pedido de venda e-commerce

describe('E-commerce - POST - /v3/ecommerce_finalizar', () => {
    const url = 'http://localhost:8091/sabium#/E-commerce/v3_ecommerce_finalizar';
  
    it('POST - /v3/ecommerce_finalizar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });