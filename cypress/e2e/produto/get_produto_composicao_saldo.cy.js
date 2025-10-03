// /v3/produto_composicao_saldo - Composição de saldo
// Composição de saldo do produto.
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Produto/v2_produto_composicao_saldo';
const Authorization = Cypress.env('API.PRAGMA')
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const quantidade = ""; //number - OBRIGATÓRIO
const local_saldo = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_composicao_saldo', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${filial_saldo}/${sku}/${quantidade}/${local_saldo}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('saldo');
          expect(resposta.body.retorno[0]).toHaveProperty('idTipoSaldoProduto');
        });
    });
  });