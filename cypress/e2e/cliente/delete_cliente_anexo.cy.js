// /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Excluir um anexo pelo idcnpj_cpf e idpessoaanexo

describe('Cliente - DELETE - /v3/cliente_anexo/{idcnpj_cpf}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        idcnpj_cpf: "",
        idpessoaanexo: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Cliente/v3_cliente_anexo_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });