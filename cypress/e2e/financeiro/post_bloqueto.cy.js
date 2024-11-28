// /v3/bloqueto - Inclusão de meio de cobrança
// Incluir meio de cobrança

describe('Financeiro - POST - /v3/bloqueto', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/bloqueto - Resposta 200', () => {
      const requestBody = {
        "titulos": [
          {
            "idfilial": 10050,
            "idtitulo": 13663,
            "idParcelaTitulo": 1,
            "idParcialTitulo": 1,
            "dataVencimento": "2024-10-18",
            "gerarJuros": false,
            "banco": {
              "idBanco": 341,
              "idAgencia": 3716,
              "idContaBancaria": "011589",
              "idInstrucaoBancaria": 10
            },
            "modeloRelatorio": {}
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_bloqueto', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });