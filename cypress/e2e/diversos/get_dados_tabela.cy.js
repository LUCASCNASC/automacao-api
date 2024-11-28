// /v3/dados_tabela/{tabela} - Tabelas do sistema
// Carregar dados das tabelas com registros fixos no sistema

describe('Diversos - GET - /v3/dados_tabela/{tabela}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/dados_tabela/{tabela} - Resposta 200', () => {
      const requestBody = {
        tabela: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_dados_tabela', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });