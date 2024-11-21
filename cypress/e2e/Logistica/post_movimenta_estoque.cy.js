// /v3/movimenta_estoque - Movimenta a entrada e saída de produtos no estoque
// Cria registros de entrada/saída de inventário, saída de imobilizados, deteriorados e de uso e consumo. Não gera nota fiscal. Não controla serial, gtin ou combustível.

describe('Logística - POST - /v3/movimenta_estoque', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_movimenta_estoque';
  
    it('POST - /v3/movimenta_estoque - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });