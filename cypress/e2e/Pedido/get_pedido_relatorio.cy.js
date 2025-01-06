// /v3/pedido_relatorio/{codigo} - Relatório
// Relatório do pedido de venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - GET - /v3/pedido_relatorio/{codigo}', () => {
  const url = '/Pedido/v2_pedido_relatorio';
  const token = acess_token

    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
          expect(resposta.body.retorno[0]).toHaveProperty('pdf');
          expect(resposta.body.retorno[0]).toHaveProperty('size');
        });
    });
  });