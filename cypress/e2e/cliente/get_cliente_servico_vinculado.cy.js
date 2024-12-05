// /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Serviços vinculados disponíveis para o cliente

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Cliente - GET - /v3/cliente_servico_vinculado/{cliente}', () => {
  const url =  '/Cliente/v3_cliente_servico_vinculado';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: "",
        processo: ""
      }

      cy.request({
        method: 'GET', 
        url:url, 
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
        });
    });
  });