// /v3/produto_bloqueio - Lista de bloqueio
// Produto bloqueado.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const id_cnpj_cpf = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_bloqueio', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('ProdutoBloqueado');
          expect(resposta.body.retorno[0]).toHaveProperty('ProdutoNaoLiberado');
        });
    });
  });