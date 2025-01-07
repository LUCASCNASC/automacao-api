// /v3/contrato_compra_e_venda/{filial}/{pedido} - Contrato compra/venda
// Contrato da compra e venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = ""; //number - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO

describe('Pagamento pedido - GET - /v3/contrato_compra_e_venda/{filial}/{pedido}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pagamento%20pedido/v2_pag_pedido_contrato_compra_e_venda/${filial}/${pedido}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('impressoratermica');
          expect(resposta.body.retorno[0]).toHaveProperty('pdf');
          expect(resposta.body.retorno[0]).toHaveProperty('size');
        });
    });
  });