// /v3/local_entrega - Local de entrega
// Listar locais de entrega

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const rota = ""; //number - OBRIGATÓRIO 

describe('Diversos - GET - /v3/local_entrega', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
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