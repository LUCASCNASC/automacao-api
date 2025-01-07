// /v3/rota - Rotas
// Listar rotas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idgruporota = ""; //integer
const idrota = ""; //integer
const idrotacidade = ""; //integer

describe('Diversos - GET - /v3/rota', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Diversos/v3_diversos_rota/${idgruporota}/${idrota}/${termo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_nome');
          expect(resposta.body.retorno[0].local_entrega[0].estado[0]).toHaveProperty('uf_codigo');
          expect(resposta.body.retorno[0].local_entrega[0].estado[0]).toHaveProperty('uf_nome');
        });
    });
  });