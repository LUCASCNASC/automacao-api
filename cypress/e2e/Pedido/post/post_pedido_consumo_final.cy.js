// /v3/pedido_consumo_final - Consumo Final
// Retorna se o pedido foi feito para um Consumidor Final
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pedido/v3_pedido_consumo_final';
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_consumo_final', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`, 
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