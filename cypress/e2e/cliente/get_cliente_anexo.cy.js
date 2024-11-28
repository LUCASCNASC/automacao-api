// /v3/cliente_anexo/{idcnpj_cpf} - Lista de anexos do cliente
// Consultar os anexos do cliente

describe('Cliente - GET -/v3/cliente_anexo/{idcnpj_cpf}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/cliente_anexo/{idcnpj_cpf} - Resposta 200', () => {
      const requestBody = {
        idcnpj_cpf: "", 
        idtipoanexo: "",
        idpessoaanexo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Cliente/v3_cliente_anexo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });