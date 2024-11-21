// /v3/intencao_compra_detalhe/{codigo} - Intenções de compras
// Lista intenções de compras

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_detalhe';
  
    it('GET - /v3/intencao_compra_detalhe/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });