// /v3/nota_fiscal_reenvio_nfe/ - Nota Fiscal (Reenvio)
// Realizar o reenvio da nota fiscal NFe
// 200 - OK
// 204 - Sem dados de retorno

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/nota_fiscal_reenvio_nfe/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do reenvio da nota fiscal NFe', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_post_nota_fiscal_reenvio_nfe`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Quantidade_Processadas');
      expect(ret).to.have.property('Processadas_com_Erro');
      expect(ret).to.have.property('Erros');
    });
  });
});