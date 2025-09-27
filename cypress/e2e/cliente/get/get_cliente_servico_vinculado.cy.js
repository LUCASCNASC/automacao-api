// /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Serviços vinculados disponíveis para o cliente
// 204 - Sem dados de retorno
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_servico_vinculado';
const Authorization = Cypress.env('API.PRAGMA');
const cliente = ""; // string - OBRIGATÓRIO
const processo = ""; // number

describe('Cliente - GET - /v3/cliente_servico_vinculado/{cliente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do serviço vinculado', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${cliente}/${processo}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idPedido');
      expect(ret).to.have.property('idItemBase');
      expect(ret).to.have.property('sku');
      expect(ret).to.have.property('nomeProduto');
      expect(ret).to.have.property('valor');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('tipoOrigem');
      expect(ret).to.have.property('descricaoTipoOrigem');
    });
  });
});