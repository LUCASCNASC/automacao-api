// /v3/observacao - Observação
// Lista de observação

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/observacao', () => {
  const url = '/Diversos/v3_diversos_observacao';
  const token = acess_token
  
  it('Resposta 200', () => {
    const requestBody = {
      "idobservacao": 1110,
      "descricao": "TESTE CAMPO OBSERVAÇÃO"
    }

    cy.request({
      method: 'POST', 
      url: url, 
      headers: { 
        Pragma: pragma_token,
        Authorization: `Bearer ${token}`,
        //'Content-Type': 'application/json'
      },
      requestBody,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(resposta.body.retorno[0]).toHaveProperty('idobservacao');
        expect(resposta.body.retorno[0]).toHaveProperty('descricao');
      });
  });
});