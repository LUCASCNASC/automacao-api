// /v3/gravar_itens_nota_transferida_coletados - Gravar Itens Nota Recebida Coletados
// Insere e atualiza a tabela de itembase nota transferida com os dados coledatos
//200 - OK

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/gravar_itens_nota_transferida_coletados', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Logística/v3_post_gravar_itens_nota_transferida_coletados`, 
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