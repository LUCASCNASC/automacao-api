// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - POST - /v3/gerar_relatorio', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Diversos/v2_diversos_gerar_relatorio`, 
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