// /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo} - Lista pedidos por título
// Retornar lista de pedidos que originaram o título

describe('Financeiro - GET - /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_pedidos_por_titulo';
  
    it('GET - /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });