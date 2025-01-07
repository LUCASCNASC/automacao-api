// /v3/local_entrega_por_cep - Local de entrega por CEP
// Listar locais de entrega por CEP

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cep = ""; //string - OBRIGATÓRIO

describe('Diversos - GET - /v3/local_entrega_por_cep', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Diversos/v3_diversos_local_entrega_por_cep/${cep}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaorota');
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoentrega');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('cidade_nome');
          expect(resposta.body.retorno[0].estado[0]).toHaveProperty('uf_codigo');
          expect(resposta.body.retorno[0].estado[0]).toHaveProperty('uf_nome');
        });
    });
  });