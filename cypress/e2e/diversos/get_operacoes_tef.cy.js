// /v3/operacoes_tef - Operacões TEF
// Retorna as operações tef configuradas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/operacoes_tef', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api
      ({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idoperacaocomtef');
          expect(resposta.body.retorno[0]).toHaveProperty('operacao');
          expect(resposta.body.retorno[0].mensagens[0]).toHaveProperty('idmensagemtef');
          expect(resposta.body.retorno[0].mensagens[0]).toHaveProperty('mensagem');
          expect(resposta.body.retorno[0].mensagens[0]).toHaveProperty('retorno');
        });
    });
  });