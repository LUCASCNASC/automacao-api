// /v3/envio_email - Dados para Envio de Email
// Enviar Email

describe('Sistema - POST - /v3/envio_email', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v3_sistema_envio_email_post';
  
    it('POST - /v3/envio_email - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });