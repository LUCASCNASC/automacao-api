// /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Executar rotinas diárias da filial
// Executa rotinas diárias da filial: Exclusão de pedidos e baixa de automática de títulos por perca, de acordo com os parâmetros de dias máximo, configurados em cada filial

describe('Caixa - GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura}', () => {
    const url = 'http://localhost:8091/sabium#/Caixa/v3_caixa_rotina_diaria_filial_get';
  
    it('GET - /v3/caixa_rotina_diaria_filial/{idFilial}/{dataAbertura} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });