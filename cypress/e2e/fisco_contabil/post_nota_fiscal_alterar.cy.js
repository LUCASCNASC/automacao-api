// /v3/nota_fiscal_alterar/ - Alteração de nota fiscal
// Alterar nota fiscal do tipo manual
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/nota_fiscal_alterar/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao alterar nota fiscal do tipo manual', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_post_nota_fiscal_alterar`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});