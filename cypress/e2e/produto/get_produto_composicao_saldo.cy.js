// /v3/produto_composicao_saldo - Composição de saldo
// Composição de saldo do produto.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - GET - /v3/produto_composicao_saldo ', () => {
  const url = '/Produto/v2_produto_composicao_saldo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial_saldo: "",
        sku: "",
        quantidade: "",
        local_saldo: ""
      }

      cy.request({
        method: 'GET', 
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('saldo');
          expect(resposta.body.retorno[0]).toHaveProperty('idTipoSaldoProduto');
        });
    });
  });