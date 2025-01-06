// /v3/observacao - Observação
// Lista de observação

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/observacao', () => {
  
  it('Resposta 200', () => {

    cy.request({
      method: 'POST', 
      url: url, 
      headers: { 
        Pragma: pragma_token,
        Authorization: `Bearer ${token}`,
        //'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(resposta.body.retorno[0]).toHaveProperty('idobservacao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});