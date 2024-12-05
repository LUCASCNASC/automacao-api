// /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Excluir um anexo pelo idcnpj_cpf e idpessoaanexo

import acess_token from '../../fixtures/token.json'

describe('Cliente - DELETE - /v3/cliente_anexo/{idcnpj_cpf}', () => {
  const url = '/Cliente/v3_cliente_anexo_delete';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = {
        idcnpj_cpf: "",
        idpessoaanexo: ""
      }

      cy.request({
        method: 'DELETE', 
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