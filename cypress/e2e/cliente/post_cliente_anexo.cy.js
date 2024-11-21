// /v3/cliente_anexo - Anexo do cliente
// Incluir Anexo

describe('Cliente - POST - /v3/cliente_anexo', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_anexo_post';
  
    it('POST - /v3/cliente_anexo - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });