// /v3/rota_cidade - Rota Cidade
// Listar rotas por cidade

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idgruporota = ""; //integer
const idrota = ""; //integer
const idrotacidade = ""; //integer

describe('Diversos - GET - /v3/rota_cidade', { env: { hideCredendials: true } }, () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrotacidade');
          expect(resposta.body.retorno[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('descricao');
        });
    });
  });