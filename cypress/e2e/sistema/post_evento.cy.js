// /v3/evento - Registra eventos do sistema
// Utilizado para registrar os eventos de movimentação dentro do Mobile

describe('Sistema - POST - /v3/evento', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_evento';
  
    it('POST - /v3/evento - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });