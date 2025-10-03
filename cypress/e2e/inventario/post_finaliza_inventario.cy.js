// /v3/finaliza_inventario - Finaliza contagem de inventário pelo aplicativo
// Finaliza a contagem de inventário, podendo ser finalizado definitivo ou não
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Inventário/v3_post_finaliza_inventario';
const Authorization = Cypress.env('API.PRAGMA')

describe('Inventário - POST - /v3/finaliza_inventario', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/${PATH_API}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });