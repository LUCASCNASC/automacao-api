
// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', { env: { hideCredendials: true } }, () => {
    
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Fisco/Contabil/v3_post_gerar_descarga_contabil`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('IdFilial');
          expect(response.body.retorno[0]).toHaveProperty('IdProcessamento');
        });
    });
  });