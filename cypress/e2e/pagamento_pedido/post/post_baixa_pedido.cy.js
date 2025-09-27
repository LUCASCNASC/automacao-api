// /v3/baixa_pedido - Fechar e Baixar pedido
// Fechar e Baixar pedido de venda pelo TOTEM
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Pagamento%20pedido/v2_pag_pedido_baixa_pedido';
const Authorization = Cypress.env('API.PRAGMA')

describe('Pagamento pedido - POST - /v3/baixa_pedido', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

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