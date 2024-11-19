describe('Diversos - GET - /v3/observacao', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_observacao';
  
    it('GET - /v3/observacao - Resposta 200', () => {
      const requestBody = {
        "idobservacao": 1110,
        "descricao": "TESTE CAMPO OBSERVAÇÃO"
      }
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          // Validação das propriedades da resposta
          // expect(response.body.cnpj).to.eq('77941490000589'); // Verifica se o "id" foi retornado
          // expect(response.body.data).to.eq('15/10/2024');
        });
    });
  });