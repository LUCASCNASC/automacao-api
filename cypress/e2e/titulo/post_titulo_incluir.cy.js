// /v3/titulo_incluir - Incluir Título A Receber/Pagar
// Inclusão A Receber/Pagar de Título, Parcela e Cartão

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Titulo - POST - /v3/titulo_incluir', () => {
  const url = '/Titulo/v3_post_titulo_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_titulo_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });