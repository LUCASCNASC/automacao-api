// /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Lista títulos (a Pagar)
// Listar títulos a pagar de cliente ou fornecedor
// 200 - OK
// 204 - Sem dados de retorno
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // number - OBRIGATÓRIO
const cpf_cnpj = ""; // string - OBRIGATÓRIO

describe('Financeiro - GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades dos títulos a pagar', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/Financeiro/v3_financeiro_dividas_pagar/${idFilial}/${cpf_cnpj}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idFilial');
      expect(ret).to.have.property('idTitulo');
      expect(ret).to.have.property('idParcelaTitulo');
      expect(ret).to.have.property('idParcialTitulo');
      expect(ret).to.have.property('dataVencimento');
      expect(ret).to.have.property('valor');
    });
  });
});