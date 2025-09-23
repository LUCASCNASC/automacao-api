// /v3/regra_fiscal_uf_incluir - Incluisão de base fiscal (UF)
// Incluir base fiscal de UF
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/regra_fiscal_uf_incluir', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da base fiscal UF incluída', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_regra_fiscal_uf_post`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalUF');
      expect(ret).to.have.property('Erros');
    });
  });
});