// /v3/lancamento_conta_corrente - Inclusão de lançamento conta corrente
// Incluir lançamento de conta corrente no financeiro. Necessário ter preenchido os campos: idFilial, idContaCorrente e idHistoricoContaCorrente

describe('Financeiro - POST - /v3/lancamento_conta_corrente', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/lancamento_conta_corrente - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idContaCorrente": 0,
        "idHistoricoContaCorrente": 0,
        "cnpjCpf": "string",
        "valor": 0,
        "complemento": "string",
        "documento": "string",
        "observacao": "string",
        "CentroCustos": [
          {
            "Debito_Credito": "string",
            "Classificacao_Centro_Custo": "string",
            "Valor": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_lancamento_conta_corrente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });