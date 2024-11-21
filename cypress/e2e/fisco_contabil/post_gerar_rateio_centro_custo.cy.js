// /v3/nota_fiscal_consulta_nfe/ - Consulta NFE
// Consulta NFE

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_gerar_rateio_centro_custo';
  
    it('POST - /v3/nota_fiscal_consulta_nfe/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });