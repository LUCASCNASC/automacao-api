// /v3/estoque/ - Dados Estoque - Retorna o estoque
//201 - Criado
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Projeto Real Time - POST - /v3/estoque/', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Projeto%20Real%20Time/v3_post_estoque`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj');
          expect(resposta.body.retorno[0]).toHaveProperty('data');
        });
    });
  });