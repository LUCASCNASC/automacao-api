// /v3/produto_previsao_entrega - Previsão de entrega
// Previsão de entrega do produto.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const processo_venda = ""; //number - OBRIGATÓRIO
const filial = ""; //number - OBRIGATÓRIO
const filial_faturar = ""; //number - OBRIGATÓRIO
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const quantidade = ""; //number - OBRIGATÓRIO
const local_saldo = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_previsao_entrega ', { env: { hideCredendials: true } }, () => {
    
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_previsao_entrega/${processo_venda}/${filial}/${filial_faturar}/${filial_saldo}/${sku}/${quantidade}/${local_saldo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('dataprevisaoentrega');
        });
    });
  });