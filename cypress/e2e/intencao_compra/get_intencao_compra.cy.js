// /v3/intencao_compra - Intenções de compras
// Lista intenções de compras
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Intenção%20compra/v2_intencao_compra_get_post1';
const Authorization = Cypress.env('API.PRAGMA')
const situacao = "123123123";

describe('Intenção compra - GET - /v3/intencao_compra', { env: { hideCredendials: true } }, () => {
  
    it('GET - /v3/intencao_compra - Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${situacao}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('nomecliente');
          expect(resposta.body.retorno[0]).toHaveProperty('dtregistrado');
        });
    });
  });