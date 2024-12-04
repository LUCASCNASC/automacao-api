// /v3/saldo_disponivel - Saldo Disponível
// Recebe uma lista de produtos e retorna uma lista com os produtos e o saldo disponível

import reqBody_post_saldo_disponivel from '../../fixtures/produto/post_saldo_disponivel.json'

describe('Produtos - POST - /v3/saldo_disponivel', () => {
  const token = Cypress.env('AUTH_TOKEN'); 

  it('Resposta 200', () => {

    cy.request({
      method: 'POST', 
      url: '/Produto/v3_produto_saldo_disponivel',
      headers: { Authorization: `Bearer ${token}` },
      body: reqBody_post_saldo_disponivel
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.below(2000);
      });
  });
});