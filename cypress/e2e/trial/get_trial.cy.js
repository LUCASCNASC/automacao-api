// /v3/trial - Trial - Lista de trial

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO
const vendedor = ""; //number - OBRIGATÓRIO
const limit = ""; //string - OBRIGATÓRIO
const offset = ""; //string - OBRIGATÓRIO

describe('Trial - GET - /v3/trial', { env: { hideCredendials: true } }, () => {
  
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