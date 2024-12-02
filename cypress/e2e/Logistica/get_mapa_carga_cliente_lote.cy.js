// /v3/mapa_carga_cliente_lote/{idFilial}/{idMapaCargaInicial}/{idMapaCargaFinal} - Lista Mapa Carga Cliente em lote
// Retorna uma lista com os mapas de carga cliente na situação(1 - A Carregar), de acordo com o preenchimento dos parâmetros de entrada:

describe('Logística - GET - /v3/mapa_carga_cliente_lote/{idFilial}/{idMapaCargaInicial}/{idMapaCargaFinal}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCargaInicial: "",
        idMapaCargaFinal: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_loja', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });