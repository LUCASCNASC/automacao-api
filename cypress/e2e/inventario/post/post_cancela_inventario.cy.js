// /v3/cancela_inventario/{idFilial}/{idInventario} - Cancelar inventário
// Exclui toda a contagem já realizado de um inventário que não esteja finalizado, disponibilizando-o para outros usuários.
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idInventario = ""; //integer - OBRIGATÓRIO

describe('Inventário - POST - /v3/cancela_inventario/{idFilial}/{idInventario}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Inventário/v3_post_cancela_inventario`, 
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