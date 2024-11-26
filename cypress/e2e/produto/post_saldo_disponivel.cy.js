// /v3/saldo_disponivel - Saldo Disponível
// Recebe uma lista de produtos e retorna uma lista com os produtos e o saldo disponível

describe('Produtos - POST - /v3/saldo_disponivel', () => {
  const url = 'http://localhost:8091/sabium#/Produto/v3_produto_saldo_disponivel';
  const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json

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
    cy.request({
      method: 'POST', 
      url,
      headers: { Authorization: `Bearer ${token}` },
      requestBody
    }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});