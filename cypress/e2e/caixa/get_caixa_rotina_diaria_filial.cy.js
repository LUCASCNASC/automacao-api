// /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Executar rotinas diárias da filial
// Executa rotinas diárias da filial: Exclusão de pedidos e baixa de automática de títulos por perca, de acordo com os parâmetros de dias máximo, configurados em cada filial

describe('Caixa - GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Resposta 200', () => {
      const requestBody = {
        idFilial: '10050',
        dataAbertura: '2024-11-22'
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET',
        url: '/Caixa/v3_caixa_rotina_diaria_filial_get',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });