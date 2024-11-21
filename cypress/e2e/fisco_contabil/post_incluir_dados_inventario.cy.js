// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_inventario_incluir';
  
    it('POST - /v3/incluir_dados_inventario - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });