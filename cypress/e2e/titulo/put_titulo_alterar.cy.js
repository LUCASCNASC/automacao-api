// /v3/titulo_alterar - Alterar Titulo A Receber/Pagar
// Alteracao A Receber/Pagar de Titulo e Parcelas

describe('Titulo - PUT - /v3/titulo_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Titulo/v3_put_titulo_alterar';
  
    it('PUT - /v3/titulo_alterar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });