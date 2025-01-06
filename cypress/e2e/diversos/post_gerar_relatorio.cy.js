// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - POST - /v3/gerar_relatorio', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('idContexto');
          expect(response.body.retorno[0]).toHaveProperty('idmodelorelatorio');
          expect(response.body.retorno[0].filtros[0]).toHaveProperty('nome');
          expect(response.body.retorno[0].filtros[0]).toHaveProperty('valor');
        });
    });
  });