// /v3/produto_serie - Numero de serie
// Lista número de série disponível do produto

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial_saldo = ""; //number - OBRIGATÓRIO
const sku = ""; //string - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_serie ', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_serie/${filial_saldo}/${sku}/${pedido}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('numeroSerie');
          expect(resposta.body.retorno[0]).toHaveProperty('dataMovimento');
        });
    });
  });