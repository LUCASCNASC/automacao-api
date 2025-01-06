// /v3/cep/{cep} - CEP
// Dados do CEP

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cep = "" //string - OBRIGATÓRIO

describe('Diversos - GET - /v3/cep/{cep}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method:'GET', 
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
          expect(resposta.body.retorno[0]).toHaveProperty('rua');
          expect(resposta.body.retorno[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].estado[0]).toHaveProperty('uf_codigo');
          expect(resposta.body.retorno[0].estado[0]).toHaveProperty('uf_nome');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('cidade_nome');
        });
    });
  });