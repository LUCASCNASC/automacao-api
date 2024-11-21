// /v3/pos_venda_Historico/{codigo} - histórico Pós-venda
// listas de históricos da pós-venda

describe('Pós-venda - GET - /v3/pos_venda_Historico/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v2_pos_venda_Historico';
  
    it('GET - /v3/pos_venda_Historico/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });