// /v3/dados_tabela/{tabela} - Tabelas do sistema
// Carregar dados das tabelas com registros fixos no sistema

describe('Diversos - GET - /v3/dados_tabela/{tabela}', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_dados_tabela';
  
    it('GET - /v3/dados_tabela/{tabela} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });