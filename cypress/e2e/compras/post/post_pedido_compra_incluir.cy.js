// /v3/pedido_compra_incluir - Incluir Pedido Compra
// Inclui pedido de compra simplificado, somente frete CIF
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Compras - POST - /v3/pedido_compra_incluir', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do retorno', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Compras/v3_post_pedido_compra_incluir`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário
        CNPJ_FilialPedido: "12345678000123",
        CNPJ_CPFFornecedor: "98765432000198"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('CNPJ_FilialPedido');
      expect(ret).to.have.property('CNPJ_CPFFornecedor');
      expect(ret).to.have.property('PedidoFornecedor');
      expect(ret).to.have.property('NumeroPedido');
      expect(ret).to.have.property('Registro_Nota');
      expect(ret).to.have.property('Registro_Nota_Armazem');
      expect(ret).to.have.property('Numero_Titulo');
    });
  });
});