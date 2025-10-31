const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_pedidos_por_titulo';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - GET /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo}', { env: { hideCredentials: true } }, () => {
  const idFilial = "123123123";
  const idTitulo = "123123123"; 
  const idTipoTitulo = "123123123";

  it('Deve retornar 200 e as propriedades de pedidos por título', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilial}/${idTitulo}/${idTipoTitulo}`,
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

  it('Deve retornar 204 quando não houver pedidos para o título informado', () => {
    const idFilialSemPedidos = "99999";
    const idTituloSemPedidos = "99999";
    const idTipoTituloSemPedidos = "99999";
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialSemPedidos}/${idTituloSemPedidos}/${idTipoTituloSemPedidos}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    const idFilialInvalido = "abc";
    const idTituloInvalido = "xyz";
    const idTipoTituloInvalido = "qwe";
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialInvalido}/${idTituloInvalido}/${idTipoTituloInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});