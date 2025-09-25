// /v3/pedido_baixar - Baixar pedido
// Baixar pedido de venda. Antes de baixar o pedido, deve fechar o mesmo.
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_baixar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Pedido/v2_pedido_baixar`, 
        headers: { Authorization },
        failOnStatusCode: false
      })  
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });