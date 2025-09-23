// /v3/pedido_validar_cliente - Validar cliente
// Validação do cliente no pedido de venda mobile
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_validar_cliente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      cy.api({
        method: 'POST', 
        url: `${API_URL}/Pedido/v3_pedido_validar_cliente`, 
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