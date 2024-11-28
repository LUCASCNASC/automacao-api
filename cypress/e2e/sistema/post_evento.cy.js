// /v3/evento - Registra eventos do sistema
// Utilizado para registrar os eventos de movimentação dentro do Mobile

describe('Sistema - POST - /v3/evento', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/evento - Resposta 200', () => {
      const requestBody = {
        "data": "string",
        "evento": "string",
        "detalhes": [
          {
            "parametro": "string",
            "valor": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Sistema/v2_sistema_evento', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });