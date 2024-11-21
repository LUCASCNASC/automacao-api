// /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal} - Lista Mapa Carga Loja em lote
// Retorna uma lista com os mapas de carga loja na situação(1 - A Carregar), de acordo com o preenchimento dos parâmetros de entrada:

describe('Logística - GET - /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal}', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_loja_lote';
  
    it('GET - /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });