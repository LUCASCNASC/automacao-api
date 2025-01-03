// /v3/operacoes_tef - Operacões TEF
// Retorna as operações tef configuradas

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/operacoes_tef', () => {
  const url = '/Diversos/v3_diversos_operacoes_tef';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
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