// /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME
// Dados do cliente simplificado

import acess_token from '../../fixtures/token.json'

describe('Cliente - GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor}', () => {
  const url = '/Cliente/v3_cliente_por_cnpj_cpf_ou_nome';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        valor: ""
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