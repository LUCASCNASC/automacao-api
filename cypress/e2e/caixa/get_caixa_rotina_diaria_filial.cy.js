// /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Executar rotinas diárias da filial
// Executa rotinas diárias da filial: Exclusão de pedidos e baixa automática de títulos por perca, de acordo com os parâmetros de dias máximo, configurados em cada filial
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/v3/caixa_rotina_diaria_filial';
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = 10050; // integer
const dataAbertura = "2024-12-20"; // string

describe('Filial - GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e responder rapidamente', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${idFilial}/${dataAbertura}`,
      headers: { Authorization }
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.duration).to.be.lessThan(2000);
      // Se quiser testar o 204 (sem retorno), pode criar outro teste!
    });
  });
});