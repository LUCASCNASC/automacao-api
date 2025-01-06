// /v3/pos_venda - Pós-venda
// Listas de pós-venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const datainicial = "yyyy-mm-dd"; //string - OBRIGATÓRIO
const datafinal = "yyyy-mm-dd"; //string - OBRIGATÓRIO

describe('Pós-venda - GET - /v3/pos_venda', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        mehtod: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('id');
          expect(resposta.body.retorno[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('previsaoentrega');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('dataentrega');
          expect(resposta.body.retorno[0].itensentrega[0]).toHaveProperty('situacaoentrega');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('idmotorista');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].itensentrega[0].motorista[0]).toHaveProperty('numerotelefone');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idgradex');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('idgradey');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('previsaomontagem');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('datamontagem');
          expect(resposta.body.retorno[0].itensmontagem[0]).toHaveProperty('situacaomontagem');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('idmontador');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('dddtelefone');
          expect(resposta.body.retorno[0].itensmontagem[0].montador[0]).toHaveProperty('numerotelefone');
        });
    });
  });