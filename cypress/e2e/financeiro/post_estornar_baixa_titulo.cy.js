// /v3/estornar_baixa_titulo - Estorno de baixa de título
// Faz o estorno da última parcial baixada ou de todas as parciais de um título.

describe('Financeiro - POST - /v3/estornar_baixa_titulo', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_estornar_baixa_titulo';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
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
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });