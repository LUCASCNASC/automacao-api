// /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga} - Excluir Mapa Carga Coletado de Cliente/Loja
// Exclui o mapa que esta em processo de carga e volta o mesmo para situação a carregar.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idMapaCarga = ""; //integer - OBRIGATÓRIO
const TipoMapaCarga = ""; //integer - OBRIGATÓRIO

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Logística/v3_delete_mapa_carga_coletado/${idFilial}/${idMapaCarga}/${TipoMapaCarga}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });