// /v3/cliente_simples_estatisticas/{idpessoa} - Dados do cliente
// Estatísticas do cliente simplificado

import acess_token from '../../fixtures/token.json'

describe('Cliente - GET - /v3/cliente_simples_estatisticas/{idpessoa}', () => {
  const url = '/Cliente/v2_cliente_simples_estatisticas';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idpessoa: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
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