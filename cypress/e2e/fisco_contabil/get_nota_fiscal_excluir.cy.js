// /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota} - Exclusão de nota fiscal
// Excluir nota fiscal

describe('Fisco/Contábil - GET - /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_nota_fiscal_excluir';
  
    it('GET - /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });