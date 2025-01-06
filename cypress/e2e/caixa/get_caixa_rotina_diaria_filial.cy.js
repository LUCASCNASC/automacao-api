// /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Executar rotinas diárias da filial
// Executa rotinas diárias da filial: Exclusão de pedidos e baixa de automática de títulos por perca, de acordo com os parâmetros de dias máximo, configurados em cada filial

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = 10050; //integer
const dataAbertura = "2024-12-20"; //string

describe('Filial - GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/v3/caixa_rotina_diaria_filial/${idFilial}/${dataAbertura}`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(status).to.equal(200);
      expect(response.duration).to.be.below(2000);
    })
  })
})