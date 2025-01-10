// /v3/observacao - Observação
// Lista de observação
//204 - Sem dados de retorno
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/observacao', { env: { hideCredendials: true } }, () => {
  
  it('Resposta 200', () => {

    cy.api({
      method: 'POST', 
      url: `${API_URL}/Diversos/v3_diversos_observacao`, 
      headers: { Authorization },
      failOnStatusCode: false
    })
      .then((response) => {
        const { data } = body;
        expect(response.status).to.eq(200);
        expect(resposta.body.retorno[0]).toHaveProperty('idobservacao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});