// /v3/documento_diverso_entrada_excluir/ - Exclusão de documento diverso (entrada)
// Excluir documento diverso de entrada
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/documento_diverso_entrada_excluir/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 ao excluir documento diverso de entrada', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_post_documento_diverso_entrada_excluir`,
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