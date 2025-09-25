// /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas} - Exclusão de base fiscal (diversas)
// Excluir base fiscal diversas
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idBaseFiscalDiversas = ""; // number - OBRIGATÓRIO

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da base fiscal diversas excluída', () => {
    cy.api({
      method: 'DELETE',
      url: `${BASE_URL}/Fisco/Contabil/v3_regra_fiscal_diversas_delete/${idBaseFiscalDiversas}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalDiversas');
      expect(ret).to.have.property('Erros');
    });
  });
});