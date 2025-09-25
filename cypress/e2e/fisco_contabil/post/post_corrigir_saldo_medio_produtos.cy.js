// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da correção de saldo/custo médio', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Id_Empresa');
      expect(ret).to.have.property('Id_Filial_Matriz');
      expect(ret).to.have.property('Id_Processamento');
    });
  });
});