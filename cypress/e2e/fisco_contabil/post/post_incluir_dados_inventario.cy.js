// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário
// 200 - OK
// 201 - Criado
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da inclusão de dados de inventário', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_post_inventario_incluir`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('CNPJ_Filial');
      expect(ret).to.have.property('Data_Inventario');
      expect(ret).to.have.property('Codigo_Inventario_PDA');
      expect(ret).to.have.property('Erros');
    });
  });
});