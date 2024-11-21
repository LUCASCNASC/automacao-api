// /v3/titulo_incluir - Incluir Título A Receber/Pagar
// Inclusão A Receber/Pagar de Título, Parcela e Cartão

describe('Titulo - POST - /v3/titulo_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Titulo/v3_post_titulo_incluir';
  
    it('POST - /v3/titulo_incluir - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });