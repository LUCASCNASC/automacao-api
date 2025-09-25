// /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Lista títulos (a receber)
// Listar títulos a receber de cliente
// 200 - OK
// 204 - Sem dados de retorno
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // number - OBRIGATÓRIO
const cpf_cnpj = ""; // string - OBRIGATÓRIO
const separarvinculados = ""; // boolean
const limit = ""; // number
const offset = ""; // number

describe('Financeiro - GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades dos títulos a receber', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Financeiro/v3_financeiro_dividas_a_receber/${idFilial}/${cpf_cnpj}/${separarvinculados}/${limit}/${offset}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idEmpresa');
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('parcela');
      expect(ret).to.have.property('processo');
      expect(ret).to.have.property('descricaoProcesso');
      expect(ret).to.have.property('calculaJurosBacen');
      expect(ret).to.have.property('dataInclusao');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('diasVencido');
      expect(ret).to.have.property('valorOriginal');
      expect(ret).to.have.property('possuiboleto');
      expect(ret.formasPagamento[0]).to.have.property('tipo');
      expect(ret.formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret.formasPagamento[0]).to.have.property('valor');
      expect(ret.pedidos[0]).to.have.property('idFilial');
      expect(ret.pedidos[0]).to.have.property('idPedidoVenda');
      expect(ret.vinculados[0]).to.have.property('idEmpresa');
      expect(ret.vinculados[0]).to.have.property('idFilial');
      expect(ret.vinculados[0]).to.have.property('idTitulo');
      expect(ret.vinculados[0]).to.have.property('idParcelaTitulo');
      expect(ret.vinculados[0]).to.have.property('idParcialTitulo');
      expect(ret.vinculados[0]).to.have.property('parcela');
      expect(ret.vinculados[0]).to.have.property('processo');
      expect(ret.vinculados[0]).to.have.property('descricaoProcesso');
      expect(ret.vinculados[0]).to.have.property('calculaJurosBacen');
      expect(ret.vinculados[0]).to.have.property('dataInclusao');
      expect(ret.vinculados[0]).to.have.property('dataVencimento');
      expect(ret.vinculados[0]).to.have.property('diasVencido');
      expect(ret.vinculados[0]).to.have.property('valorOriginal');
      expect(ret.vinculados[0]).to.have.property('possuiboleto');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('tipo');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('permiteParcial');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('permiteDesconto');
      expect(ret.vinculados[0].formasPagamento[0]).to.have.property('valor');
      expect(ret.vinculados[0].pedidos[0]).to.have.property('idFilial');
      expect(ret.vinculados[0].pedidos[0]).to.have.property('idPedidoVenda');
      expect(ret).to.have.property('quantidadeTotalRegistro');
    });
  });
});