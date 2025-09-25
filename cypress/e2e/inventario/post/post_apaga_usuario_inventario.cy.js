// /v3/apaga_usuario_inventario/{idFilial}/{idInventario} - Apaga o usuário do inventário
// Apaga o usuário do inventário se não existir nenhuma contagem existente.
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Inventário - POST - /v3/apaga_usuario_inventario/{idFilial}/{idInventario}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Inventário/v3_post_apaga_usuario_inventario`, 
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