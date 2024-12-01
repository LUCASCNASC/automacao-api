// /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal} - Lista Mapa Carga Loja em lote
// Retorna uma lista com os mapas de carga loja na situação(1 - A Carregar), de acordo com o preenchimento dos parâmetros de entrada:

describe('Logística - GET - /v3/mapa_carga_loja_lote/{idFilial}/{idMapaCargaLojaInicial}/{idMapaCargaLojaFinal}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idMapaCargaLojaInicial: "",
        idMapaCargaLojaFinal: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_loja_lote', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });