// /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo} - Lista pedidos por título
// Retornar lista de pedidos que originaram o título
// 200 - OK
// 204 - Sem dados de retorno
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // number - OBRIGATÓRIO
const idTitulo = ""; // number - OBRIGATÓRIO
const idTipoTitulo = ""; // number - OBRIGATÓRIO

describe('Financeiro - GET - /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de pedidos por título', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Financeiro/v3_financeiro_pedidos_por_titulo/${idFilial}/${idTitulo}/${idTipoTitulo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idPedidoVenda');
    });
  });
});