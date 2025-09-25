// /post_gerar_rateio_centro_custo/ - Consulta NFE
// Consulta NFE
// 200 - OK
// 201 - Criado
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do rateio centro de custo gerado', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_post_gerar_rateio_centro_custo`,
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