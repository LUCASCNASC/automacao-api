// /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Exclusão de conta bancária
// Excluir conta bancária pelo código do banco, agência e conta

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigoBanco = ""; //number - OBRIGATÓRIO
const codigoAgencia = ""; //number - OBRIGATÓRIO
const codigoConta = ""; //string - OBRIGATÓRIO

describe('Financeiro - DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });