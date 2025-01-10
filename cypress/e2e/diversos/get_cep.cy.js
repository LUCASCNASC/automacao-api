// /v3/cep/{cep} - CEP
// Dados do CEP
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cep = "" //string - OBRIGATÓRIO

describe('Diversos - GET - /v3/cep/{cep}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method:'GET', 
        url: `${API_URL}/Diversos/v2_diversos_cep/${cep}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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