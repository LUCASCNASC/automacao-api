// /v3/dados_titular_excluir - Excluir dados titular
// Exclusão dos dados do titular
//204 - Sem dados de retorno
//200 - OK
//412 - Precondition Failed
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Titulo - POST - /v3/dados_titular_excluir', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'GET', 
        url: `${API_URL}/LGPD/v3_post_lgpd_dados_titular_excluir`,
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