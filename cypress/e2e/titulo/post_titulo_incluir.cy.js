// /v3/titulo_incluir - Incluir Título A Receber/Pagar
// Inclusão A Receber/Pagar de Título, Parcela e Cartão
//200 - OK
//412 - Falha - Não atende aos pré-requisitos
//201 - Criado

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Titulo/v3_post_titulo_incluir';
const Authorization = Cypress.env('API.PRAGMA')

describe('Titulo - POST - /v3/titulo_incluir', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}`, 
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