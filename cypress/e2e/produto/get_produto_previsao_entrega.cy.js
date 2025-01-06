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
          expect(resposta.body.retorno[0]).toHaveProperty('dataprevisaoentrega');
        });
    });
  });