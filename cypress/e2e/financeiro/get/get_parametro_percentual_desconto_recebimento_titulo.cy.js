// /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial} - Lista parâmetro (1055 - percentual desconto no recebimento de título)
// Listar o valor do parâmetro 1055 - percentual máximo de desconto no recebimento de títulos do caixa.
// 200 - OK
// 204 - Sem dados de retorno
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // number - OBRIGATÓRIO

describe('Financeiro - GET - /v3/parametro_percentual_desconto_recebimento_titulo/{idFilial}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e o percentual máximo', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Financeiro/v3_financeiro_parametro_percentual_desconto_recebimento_titulo/${idFilial}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('percentualMaximo');
    });
  });
});