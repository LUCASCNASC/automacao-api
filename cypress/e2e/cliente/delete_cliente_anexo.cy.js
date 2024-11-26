// /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Excluir um anexo pelo idcnpj_cpf e idpessoaanexo

describe('Cliente - DELETE - /v3/cliente_anexo/{idcnpj_cpf}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_anexo_delete';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/cliente_anexo/{idcnpj_cpf} - Resposta 200', () => {
      const requestBody = {
        idcnpj_cpf: "",
        idpessoaanexo: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });