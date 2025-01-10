// /v3/pedido_relatorio/{codigo} - Relatório
// Relatório do pedido de venda
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO

describe('Pedido - GET - /v3/pedido_relatorio/{codigo}', { env: { hideCredendials: true } }, () => {

    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pedido/v2_pedido_relatorio/${codigo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
          expect(resposta.body.retorno[0]).toHaveProperty('pdf');
          expect(resposta.body.retorno[0]).toHaveProperty('size');
        });
    });
  });