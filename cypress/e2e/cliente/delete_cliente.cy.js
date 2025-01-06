// /v3/cliente/{cliente} - Dados do cliente
// Excluir cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cliente = ""; //string

describe('Cliente - DELETE - /v3/cliente/{cliente}', { env: { hideCredendials: true } }
  , () => {
  const url = '/Cliente/v2_cliente_get_delete_delete';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });