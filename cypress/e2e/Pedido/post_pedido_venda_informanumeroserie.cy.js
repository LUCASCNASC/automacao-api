// /v3/pedido_venda_informanumeroserie/ - Dados dos números de série de um item do pedido de venda
// Serviço utilizado para informar número de série para produtos que controlam serial ou solicitam serial na venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_venda_informanumeroserie/', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });