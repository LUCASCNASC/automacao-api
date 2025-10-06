// Testes para o endpoint: /v3/historico_conta_corrente/{idTipoContaCorrente} - Lista histórico de conta corrente
// Listar histórico de conta corrente
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_historicocontacorrente';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - GET /v3/historico_conta_corrente/{idTipoContaCorrente}', { env: { hideCredentials: true } }, () => {
  const idTipoContaCorrente = ""; // number - OBRIGATÓRIO
  const idContaCorrente = ""; // number

  it('Deve retornar 200 e as propriedades do histórico de conta corrente', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idTipoContaCorrente}/${idContaCorrente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idHistoricoContaCorrente');
      expect(ret).to.have.property('descricao');
      expect(ret).to.have.property('idTipoHistorico');
      expect(ret).to.have.property('tipoHistorico');
    });
  });

  it('Deve retornar 204 quando não houver histórico para os parâmetros informados', () => {
    const idTipoContaCorrenteSemDados = "99999";
    const idContaCorrenteSemDados = "99999";
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idTipoContaCorrenteSemDados}/${idContaCorrenteSemDados}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros inválidos', () => {
    const idTipoContaCorrenteInvalido = "abc";
    const idContaCorrenteInvalido = "xyz";
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idTipoContaCorrenteInvalido}/${idContaCorrenteInvalido}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});