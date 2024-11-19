describe('Produtos - POST - /v3/saldo_disponivel', () => {
  const url = 'http://localhost:8091/sabium#/Produto/v3_produto_saldo_disponivel';

  it('POST - /v3/saldo_disponivel - Resposta 200', () => {
    const requestBody = {
      "produtos": [
        {
          "idFilial": 10050,
          "idProduto": 5,
          "idGradeX": 0,
          "idGradeY": 0,
          "idLocalSaldo": 1
        }
      ]
    }
    // Realiza a requisição POST
    cy.request('POST', url, requestBody)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});