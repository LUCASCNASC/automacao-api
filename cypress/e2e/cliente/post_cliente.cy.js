// /v3/cliente - Dados do cliente
// Incluir/Alterar cliente

describe('Cliente - POST - /v3/cliente', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v3_cliente_post';
  
    it('POST - /v3/cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });