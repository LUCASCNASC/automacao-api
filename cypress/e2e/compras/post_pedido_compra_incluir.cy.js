// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Compras - POST - /v3/pedido_compra_incluir', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('CNPJ_FilialPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('CNPJ_CPFFornecedor');
          expect(resposta.body.retorno[0]).toHaveProperty('PedidoFornecedor');
          expect(resposta.body.retorno[0]).toHaveProperty('NumeroPedido');
          expect(resposta.body.retorno[0]).toHaveProperty('Registro_Nota');
          expect(resposta.body.retorno[0]).toHaveProperty('Registro_Nota_Armazem');
          expect(resposta.body.retorno[0]).toHaveProperty('Numero_Titulo');
        });
    });
  });