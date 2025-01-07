// /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Lista parâmetro (1055 - percentual desconto no recebimento de título)
// Listar o valor do parâmetro 1055 - percentual máximo de desconto no recebimento de títulos do caixa.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO

describe('Financeiro - GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo/${idFilial}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('percentualMaximo');
        });
    });
  });