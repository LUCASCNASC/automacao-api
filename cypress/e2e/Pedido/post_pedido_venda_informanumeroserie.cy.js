// /v3/pedido_venda_informanumeroserie/ - Dados dos números de série de um item do pedido de venda
// Serviço utilizado para informar número de série para produtos que controlam serial ou solicitam serial na venda

import reqBody_post_pedido_venda_informanumeroserie from '../../fixtures/pedido/post_pedido_venda_informanumeroserie.json'

describe('Pedido - POST - /v3/pedido_venda_informanumeroserie/', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_post_pedido_venda_informanumeroserie', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_venda_informanumeroserie
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });