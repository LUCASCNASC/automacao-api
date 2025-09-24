// /api/session - Sessões
// Sessões ativas.
// 200 - OK

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Filial - GET - /api/session', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades esperadas', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/API/api_session`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body.retorno).to.be.an('array').and.not.be.empty;
      const sessao = response.body.retorno[0];
      expect(sessao).to.have.property('sessao');
      expect(sessao).to.have.property('tempo');
      expect(sessao).to.have.property('expiraEm');
    });
  });
});