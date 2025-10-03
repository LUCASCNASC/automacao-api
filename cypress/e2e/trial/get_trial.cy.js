// /v3/trial - Trial - Lista de trial
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Trial/v2_trial_get_post1';
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO
const vendedor = ""; //number - OBRIGATÓRIO
const limit = ""; //string - OBRIGATÓRIO
const offset = ""; //string - OBRIGATÓRIO

describe('Trial - GET - /v3/trial', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idFilial}/${pedido}/${vendedor}/${limit}/${offset}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('pedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('dataInclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('vendedor');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeVendedor');
          expect(resposta.body.retorno[0]).toHaveProperty('permissao');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('trial');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('descricaoTrial');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('produto');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('idGradeX');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('idGradeY');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('descricaoProduto');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('valorunitario');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('valortotal');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('percdescontoacrescimo');
          expect(resposta.body.retorno[0].trial[0]).toHaveProperty('valordescontoacrescimo');
        });
    });
  });