// /v3/excluir_titulo_areceber_apagar - Exclusão de título (a receber ou a pagar)
// Efetuar a exclusão de título a receber ou a pagar

describe('Financeiro - POST - /v3/excluir_titulo_areceber_apagar', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_excluir_titulo_areceber_apagar';
  
    it('POST - /v3/excluir_titulo_areceber_apagar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });