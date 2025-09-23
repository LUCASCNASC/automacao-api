// /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP} - Exclusão de base fiscal (CFOP)
// Excluir base fiscal de CFOP
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idBaseFiscalCFOP = ""; // number - OBRIGATÓRIO

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da base fiscal de CFOP excluída', () => {
    cy.api({
      method: 'DELETE',
      url: `${API_URL}/Fisco/Contabil/v3_regra_fiscal_cfop_delete/${idBaseFiscalCFOP}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalCFOP');
      expect(ret).to.have.property('Erros');
    });
  });
});