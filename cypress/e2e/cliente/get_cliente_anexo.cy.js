// /v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente
// Consultar os anexos do cliente

import acess_token from '../../fixtures/token.json'

describe('Cliente - GET -/v3/cliente_anexo/{idcnpj_cpf}', () => {
  const url = '/Cliente/v3_cliente_anexo';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idcnpj_cpf: "", 
        idtipoanexo: "",
        idpessoaanexo: ""
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