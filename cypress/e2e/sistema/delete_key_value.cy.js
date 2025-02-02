// /v3/key_value/{key} - Exclui chave e valor
// Excluir um determindo valor pela sua chave
//200 - OK
//204 - Sem dados de retorno
//401 - Sem permissão para acessar este recurso

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const key = ""; //string - OBRIGATÓRIO

describe('Sistema - DELETE - /v3/key_value/{key}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE',
        url: `${API_URL}/Sistema/v2_sistema_key_value_delete/${key}`,
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