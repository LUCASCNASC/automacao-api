// /v3/rota - Rotas
// Listar rotas

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/rota', () => {
  const url = '/Diversos/v3_diversos_rota';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idgruporota: "",
        idrota: "",
        termo: ""
      }

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
          expect(resposta.body.retorno[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_nome');
          expect(resposta.body.retorno[0].local_entrega[0].estado[0]).toHaveProperty('uf_codigo');
          expect(resposta.body.retorno[0].local_entrega[0].estado[0]).toHaveProperty('uf_nome');
        });
    });
  });