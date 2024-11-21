// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_gerar_descarga_contabil';
  
    it('POST - /v3/gerar_descarga_contabil - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });