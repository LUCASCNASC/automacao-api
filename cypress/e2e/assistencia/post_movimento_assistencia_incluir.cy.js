// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', { env: { hideCredendials: true } }, () => {
  const url = '/Assistencia/v3_post_movimento_assistencia_incluir';
  const token = acess_token  
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('Empresa');
          expect(response.body.retorno[0]).toHaveProperty('Filial');
          expect(response.body.retorno[0]).toHaveProperty('ID_Registro_Nota');
          expect(response.body.retorno[0]).toHaveProperty('Qtde_Assistencias');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });