// /v3/observacao - Observação
// Lista de observação

describe('Diversos - GET - /v3/observacao', () => {
  const token = Cypress.env('AUTH_TOKEN');
  

  it('Resposta 200', () => {
    const requestBody = {
      "idobservacao": 1110,
      "descricao": "TESTE CAMPO OBSERVAÇÃO"
    }

    cy.request({
      method: 'POST', 
      url: '/Diversos/v3_diversos_observacao', 
      headers: { Authorization: `Bearer ${token}` },
      requestBody
    }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});