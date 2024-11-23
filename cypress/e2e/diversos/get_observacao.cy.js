// /v3/observacao - Observação
// Lista de observação

describe('Diversos - GET - /v3/observacao', () => {
  const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_observacao';
  const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

  it('GET - /v3/observacao - Resposta 200', () => {
    const requestBody = {
      "idobservacao": 1110,
      "descricao": "TESTE CAMPO OBSERVAÇÃO"
    }
    // Realiza a requisição GET
    cy.request({
      method: 'POST', 
      url, 
      //headers: { authorization },
      requestBody
    }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});