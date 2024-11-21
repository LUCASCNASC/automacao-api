// /v3/produto_tipo_saldo_detalhe - Tipo Saldo Detalhe
// Lista de Tipo Saldo Detalhado do Produto

describe('Produtos - GET - /v3/produto_tipo_saldo_detalhe ', () => {
    const url = 'http://localhost:8091/sabium#/Produto/v3_produto_tipo_saldo_detalhe';
  
    it('GET - /v3/produto_tipo_saldo_detalhe  - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });