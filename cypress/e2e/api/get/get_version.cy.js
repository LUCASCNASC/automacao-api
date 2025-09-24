// /api/version - Versão
// Versão do sistema e banco.
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Filial - GET - /api/version', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades de versão', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/api/version`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body.retorno).to.be.an('array').and.not.be.empty;
      const versao = response.body.retorno[0];
      expect(versao).to.have.property('versaoREST');
      expect(versao).to.have.property('versaoBanco');
    });
  });
});