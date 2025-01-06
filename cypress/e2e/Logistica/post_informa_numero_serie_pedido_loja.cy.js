// /v3/informa_numero_serie_pedido_loja - Dados dos números de série de um pedido de loja
// Serviço utilizado para informar número de série para itens de pedido de loja que será posteriormente faturado.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/informa_numero_serie_pedido_loja', () => {
  const url = '/Log%C3%ADstica/v3_post_logistica_informanumeroseriepedidoloja';
  const token = acess_token

    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_informa_numero_serie_pedido_loja,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });