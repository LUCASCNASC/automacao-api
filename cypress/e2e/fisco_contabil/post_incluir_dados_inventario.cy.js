// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', () => {
  const url = '/Fisco/Contabil/v3_post_inventario_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_incluir_dados_inventario,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });