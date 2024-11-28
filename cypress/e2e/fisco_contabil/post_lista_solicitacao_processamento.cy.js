// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento

describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/lista_solicitacao_processamento - Resposta 200', () => {
      const requestBody = {
        "Por Processamento": [
          {
            "IdFilial": 0,
            "IdProcessamento": 0
          }
        ],
        "Por Intervalo": [
          {
            "Data_Inicial": "string",
            "Data_Final": "string",
            "TipoProcessamento": "7=SPED fiscal, 8=Descarga contábil",
            "SituacaoProcessamento": "1=Pendente, 2=Processamento, 3=Efetivada"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_lista_solicitacao_processamento', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });