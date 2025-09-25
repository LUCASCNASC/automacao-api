// /v3/informa_numero_serie_pedido_loja - Dados dos números de série de um pedido de loja
// Serviço utilizado para informar número de série para itens de pedido de loja que será posteriormente faturado.
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/informa_numero_serie_pedido_loja', { env: { hideCredendials: true } }, () => {

    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Logística/v3_post_logistica_informanumeroseriepedidoloja`, 
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