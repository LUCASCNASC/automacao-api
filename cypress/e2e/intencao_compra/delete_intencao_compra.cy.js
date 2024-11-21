// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_delete';
  
    it('DELETE - /v3/intencao_compra/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });