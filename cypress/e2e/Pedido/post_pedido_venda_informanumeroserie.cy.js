// /v3/pedido_venda_informanumeroserie/ - Dados dos números de série de um item do pedido de venda
// Serviço utilizado para informar número de série para produtos que controlam serial ou solicitam serial na venda

import reqBody_post_pedido_venda_informanumeroserie from '../../fixtures/pedido/post_pedido_venda_informanumeroserie.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_venda_informanumeroserie/', () => {
  const url = '/Pedido/v3_post_pedido_venda_informanumeroserie';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pedido_venda_informanumeroserie,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });