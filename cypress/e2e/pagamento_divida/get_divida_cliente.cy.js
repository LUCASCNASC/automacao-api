// /v3/divida_cliente/{filial}/{cliente} - Títulos do cliente
// lista de títulos a receber do cliente

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pagamento divida - GET - /v3/divida_cliente/{filial}/{cliente}', () => {
  const url = '/Pagamento%20divida/v2_divida_cliente';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        cliente: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0]).toHaveProperty('valor_principal');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcela_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcial_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('valor_vinculado');
        });
    });
  });