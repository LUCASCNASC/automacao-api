// /v3/gerar_relatorio - Relatório
// Gerar relatório em base64
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_gerar_relatorio';
const Authorization = Cypress.env('API.PRAGMA');

describe('Diversos - POST - /v3/gerar_relatorio', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do relatório gerado', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário para a API.
        idmodelorelatorio: 1,
        filtros: [{ nome: "dataIni", valor: "2025-01-01" }]
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idContexto');
      expect(ret).to.have.property('idmodelorelatorio');
      expect(ret.filtros[0]).to.have.property('nome');
      expect(ret.filtros[0]).to.have.property('valor');
    });
  });
});