describe('Financeiro - POST - /v3/estornar_baixa_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_estornar_baixa_titulo';
  
    it('POST - /v3/estornar_baixa_titulo - Resposta 200', () => {
      const requestBody = {
        "idFilialEstorno": 10050,
        "idFilial": 10050,
        "idTitulo": 13624,
        "idTipoTitulo": 1,
        "idParcelaTitulo": 1,
        "estornoParcial": true
      }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });