// /v3/gerar_sped_fiscal - Gera SPED fiscal
// Incluir solicitação de processamento para gerar o SPED fiscal

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/gerar_sped_fiscal', () => {
  const url = '/Fisco/Contabil/v3_post_gerar_sped_fiscal';
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
        body: reqBody_post_gerar_sped_fiscal,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });