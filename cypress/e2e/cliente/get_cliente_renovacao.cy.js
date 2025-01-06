// /v3/cliente_renovacao/{cliente} - Renovação
// Renovações de serviços disponiveis para o cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cliente = "" //string - OBRIGATÓRIO

describe('Cliente - GET - /v3/cliente_renovacao/{cliente}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({method: 'GET', 
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
          expect(resposta.body.retorno[0]).toHaveProperty('idPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('idRegistroNota');
          expect(resposta.body.retorno[0]).toHaveProperty('idOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('codigoOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('dataVencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoOrigem');
          expect(resposta.body.retorno[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0].servico[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servico[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servico[0]).toHaveProperty('valor');
        });
    });
  });