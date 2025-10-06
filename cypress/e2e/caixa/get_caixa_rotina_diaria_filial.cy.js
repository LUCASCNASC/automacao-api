// Testes para o endpoint: /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}
// Executa rotinas diárias da filial: exclusão de pedidos e baixa automática de títulos por perda, 
// de acordo com os parâmetros de dias máximos configurados em cada filial.
//
// Códigos de resposta esperados:
// - 200: OK
// - 204: Sem dados de retorno
// - 412: Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/v3/caixa_rotina_diaria_filial';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Caixa Rotina Diária Filial', { env: { hideCredentials: true } }, () => {
  const idFilialValido = 10050;
  const dataAberturaValida = "2024-12-20";

  it('Deve retornar 200 e responder rapidamente para uma filial e data válidas', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialValido}/${dataAberturaValida}`,
      headers: { Authorization }
    }).should((response) => {
      expect(response.status, 'Status code deve ser 200').to.equal(200);
      expect(response.duration, 'Tempo de resposta deve ser < 2s').to.be.lessThan(2000);
      // Adicione aqui outras validações do corpo de resposta, caso existam
    });
  });

  it('Deve retornar 204 quando não houver dados para a filial/data informados', () => {
    const idFilialSemDados = 99999; // Use um ID de filial que não há rotina para a data
    const dataSemMovimentacao = "2099-01-01"; // Data futura para garantir ausência de dados

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialSemDados}/${dataSemMovimentacao}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status code deve ser 204').to.equal(204);
      expect(response.body, 'Corpo deve ser vazio').to.be.empty;
    });
  });

  it('Deve retornar 412 para parâmetros que não atendem aos pré-requisitos', () => {
    const idFilialInvalido = 'abc'; // ID inválido propositalmente
    const dataAberturaInvalida = 'data_invalida';

    cy.api({
      method: 'GET',
      url: `${BASE_URL}${PATH_API}/${idFilialInvalido}/${dataAberturaInvalida}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status, 'Status code deve ser 412').to.equal(412);
      // Dependendo da API, valide mensagem de erro aqui
      expect(response.body).to.exist;
    });
  });
});

/**
 * Como rodar:
 * - Configure as variáveis BASE_URL e API.PRAGMA no seu cypress.env.json
 * - Execute: npx cypress open --e2e ou npx cypress run --spec "caminho/para/este/arquivo"
 * 
 * Observações:
 * - O teste 204 e 412 dependem de dados controlados no ambiente de teste.
 * - Ajuste os parâmetros (idFilial, dataAbertura) conforme o cenário do seu backend.
 */