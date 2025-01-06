// /v3/configuracao_recarga - Servico para recarga TEF
// Retorna o serviço e as formas de pagamento configurados para recarga de celular via TEF

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Recarga - GET - /v3/configuracao_recarga', () => {
  const url = '/Recarga/v3_configuracao_recarga';
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
          expect(resposta.body.retorno[0]).toHaveProperty('idServico');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('idProcesso');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('descricaoAbreviada');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('tipo');
        });
    });
  });