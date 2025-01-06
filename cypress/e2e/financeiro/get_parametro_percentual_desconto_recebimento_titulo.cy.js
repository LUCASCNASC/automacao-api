// /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Lista parâmetro (1055 - percentual desconto no recebimento de título)
// Listar o valor do parâmetro 1055 - percentual máximo de desconto no recebimento de títulos do caixa.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO

describe('Financeiro - GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('percentualMaximo');
        });
    });
  });