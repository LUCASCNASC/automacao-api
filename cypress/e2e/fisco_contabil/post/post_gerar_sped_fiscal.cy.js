// /v3/gerar_sped_fiscal - Gera SPED fiscal
// Incluir solicitação de processamento para gerar o SPED fiscal
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/gerar_sped_fiscal', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do processamento SPED fiscal', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_post_gerar_sped_fiscal`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('IdFilial');
      expect(ret).to.have.property('IdProcessamento');
    });
  });
});