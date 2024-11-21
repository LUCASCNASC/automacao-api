// /v3/pos_venda - Pós-venda
// Incluir contato de pós-venda

describe('Pós-venda - POST - /v3/pos_venda', () => {
    const url = 'http://localhost:8091/sabium#/P%C3%B3s-venda/v3_pos_venda_get_post2';
  
    it('POST - /v3/pos_venda - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });