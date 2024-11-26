// /v3/referenciabancaria - Alteração de referência bancária
// Alterar referência bancária pelo CNPJ/CPF da pessoa e código da referência bancária

describe('Financeiro - PUT - /v3/referenciabancaria', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_referencia_bancaria2';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('PUT - /v3/referenciabancaria - Resposta 200', () => {
      const requestBody = {
        "idReferenciaBancaria": 0,
        "cnpjCpf": "string",
        "banco": 0,
        "agencia": "string",
        "conta": "string",
        "dataAbertura": "string",
        "ddd": "string",
        "telefone": "string",
        "gerente": "string",
        "boleto": true,
        "email": "string",
        "idTipoConta": 0,
        "idFormaPagamento": 0,
        "cnpjCpfCorrentista": "string",
        "nomeCorrentista": "string",
        "operacaoBancaria": "string",
        "idtipochavepix": "1 - Telefone, 2 - Email, 3 - CPF CNPJ, 4 - Aleatória",
        "chavepix": "string"
      }
      // Realiza a requisição PUT
      cy.request({
        method: 'PUT', 
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