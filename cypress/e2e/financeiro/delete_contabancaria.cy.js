// /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta} - Exclusão de conta bancária
// Excluir conta bancária pelo código do banco, agência e conta

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - DELETE - /v3/contabancaria/{codigoBanco}/{codigoAgencia}/{codigoConta}', () => {
  const url = '/Financeiro/v3_financeiro_conta_bancaria_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: "",
        codigoConta: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });