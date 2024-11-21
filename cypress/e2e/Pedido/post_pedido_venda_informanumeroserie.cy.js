// /v3/pedido_venda_informanumeroserie/ - Dados dos números de série de um item do pedido de venda
// Serviço utilizado para informar número de série para produtos que controlam serial ou solicitam serial na venda

describe('Pedido - POST - /v3/pedido_venda_informanumeroserie/', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_post_pedido_venda_informanumeroserie';
  
    it('POST - /v3/pedido_venda_informanumeroserie/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });