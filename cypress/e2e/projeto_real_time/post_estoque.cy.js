// /v3/estoque/ - Dados Estoque
// Retorna o estoque

describe('Projeto Real Time - POST - /v3/estoque/', () => {
    const url = 'http://localhost:8091/sabium#/Projeto%20Real%20Time/v3_post_estoque';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/estoque/ - Resposta 200', () => {
      const requestBody = {
        "cnpj": "77941490000589",
        "data": "15/10/2024"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          // Validação das propriedades da resposta
          // expect(response.body.cnpj).to.eq('77941490000589'); // Verifica se o "id" foi retornado
          // expect(response.body.data).to.eq('15/10/2024');
        });
    });
  });