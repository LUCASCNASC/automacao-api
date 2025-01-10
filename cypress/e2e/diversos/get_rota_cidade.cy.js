// /v3/rota_cidade - Rota Cidade
// Listar rotas por cidade
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idgruporota = ""; //integer
const idrota = ""; //integer
const idrotacidade = ""; //integer

describe('Diversos - GET - /v3/rota_cidade', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Diversos/v3_diversos_rota_cidade/${idgruporota}/${idrota}/${idrotacidade}`,
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