// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', () => {
  const url = '/Financeiro/v3_financeiro_agencia_delete';
  const token = acess_token
    
  
    it('Resposta 200', () => {
      const requestBody = {
        codigoBanco: "",
        codigoAgencia: ""
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