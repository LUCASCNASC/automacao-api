// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário
// 200 - OK
// 201 - Criado
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_inventario_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da inclusão de dados de inventário', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        "Filial": 123123123,
        "Data_Inventario": "2024-01-31",
        "Itens_Inventario": [
          {
            "Codigo_Produto": "string",
            "Descricao_Produto": "string",
            "Quantidade": 0,
            "Unidade": "string",
            "Valor_Unitario": 0,
            "Valor_Total": 0
          }
        ]
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