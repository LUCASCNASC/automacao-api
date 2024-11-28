// /v3/cliente_anexo - Anexo do cliente
// Incluir Anexo

describe('Cliente - POST - /v3/cliente_anexo', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/cliente_anexo - Resposta 200', () => {
      const requestBody = {
        "idcnpj_cpf": "string",
        "idtipoanexo": 0,
        "idpessoaanexo": "string",
        "descricao": "string",
        "arquivo": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Cliente/v3_cliente_anexo_post', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });