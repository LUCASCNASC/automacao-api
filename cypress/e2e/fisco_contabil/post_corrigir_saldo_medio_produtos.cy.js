// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos';
  
    it('POST - /v3/corrigir_saldo_medio_produtos - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });