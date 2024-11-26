// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais

describe('Fisco/Contábil - POST - /v3/receber_transferencia', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_receber_transferencia';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {
      const requestBody = {
        "Filial": 0,
        "IgnorarSituacaoSefaz": true,
        "Notas": [
          {
            "IdFilialOrigem": 0,
            "NumeroNota": 0,
            "IdNFeSefaz": "string"
          }
        ]
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
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });