// Testes para o endpoint: /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Retorna serviços vinculados disponíveis para o cliente.
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Cliente/v3_cliente_servico_vinculado';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Cliente - GET /v3/cliente_servico_vinculado/{cliente}', { env: { hideCredentials: true } }, () => {
  const clienteValido = ""; // Preencha com um valor válido
  const processoValido = ""; // Preencha com um valor válido

  it('Deve retornar 200 e as propriedades do serviço vinculado', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteValido}/${processoValido}`,
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

  it('Deve retornar 204 quando não houver serviços vinculados para o cliente/processo', () => {
    const clienteSemServico = "00000000000000";
    const processoSemServico = "000000";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${clienteSemServico}/${processoSemServico}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});