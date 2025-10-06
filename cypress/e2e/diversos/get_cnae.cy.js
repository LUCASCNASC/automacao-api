// Testes para o endpoint: /v3/cnae - Lista dos CNAEs
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Diversos/v2_diversos_cnae';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Diversos - GET /v3/cnae', { env: { hideCredentials: true } }, () => {
  const termoValido = ""; // Preencha conforme necessário
  const limit = "";
  const offset = "";
  const sort = "";

  it('Deve retornar 200 e as propriedades do CNAE', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoValido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('count');
      expect(ret.data[0]).to.have.property('idcnae');
      expect(ret.data[0]).to.have.property('descricao');
    });
  });

  it('Deve retornar 204 quando não houver dados para o termo informado', () => {
    const termoSemDados = "xxxxxx";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoSemDados}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para termo inválido', () => {
    const termoInvalido = "!!@@##";

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${termoInvalido}/${limit}/${offset}/${sort}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});