// /v3/regra_fiscal_departamento_incluir - Inclusão de base fiscal (departamento)
// Incluir base fiscal de departamento
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/regra_fiscal_departamento_incluir', { env: { hideCredendials: true } }, () => {
  it('POST - /v3/regra_fiscal_departamento_incluir - Resposta 200', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_regra_fiscal_departamento_post`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdBaseFiscalDepartamento');
      expect(ret).to.have.property('Erros');
    });
  });
});