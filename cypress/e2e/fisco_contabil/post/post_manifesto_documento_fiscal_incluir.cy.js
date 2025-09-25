// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do manifesto de documento fiscal incluído', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Id_Manifesto_Documento_Fiscal');
      expect(ret).to.have.property('Id_Filial');
      expect(ret).to.have.property('Erros');
    });
  });
});