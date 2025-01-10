// /v3/produto_bloqueio - Lista de bloqueio
// Produto bloqueado.
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const id_cnpj_cpf = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_bloqueio', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_bloqueio/${filial}/${sku}/${id_cnpj_cpf}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('ProdutoBloqueado');
          expect(resposta.body.retorno[0]).toHaveProperty('ProdutoNaoLiberado');
        });
    });
  });