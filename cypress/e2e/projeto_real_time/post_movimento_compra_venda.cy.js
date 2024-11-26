// /v3/movimento_compra_venda/ - Dados Movimento
// Retorna os movimentos de entrada e saída dos produtos

describe('Projeto Real Time - POST - /v3/movimento_compra_venda/', () => {
    const url = 'http://localhost:8091/sabium#/Projeto%20Real%20Time/v3_post_movimento_compra_venda';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/movimento_compra_venda/ - Resposta 200', () => {
      const requestBody = {
        "cnpj": "77941490000589",
        "data_inicial": "01/07/2024",
        "data_final": "09/07/2024",
        "hora_inicial": "07:00",
        "hora_final": "18:00"
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
        });
    });
  });