// /v3/estornar_baixa_pedido - Estorno da baixar pedido
// Estornar baixa do pedido de venda pelo TOTEM
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pagamento%20pedido/v2_pag_pedido_estornar_baixa_pedido';
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/estornar_baixa_pedido', { env: { hideCredendials: true } }, () => {
  
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