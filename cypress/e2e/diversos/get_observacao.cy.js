// /v3/observacao - Observação
// Lista de observação

import acess_token from '../../fixtures/token.json'

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
        Authorization: `Bearer ${token}`,
        //'Content-Type': 'application/json'
      },
      requestBody,
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});