// /v3/excluir_dados_coletados_nota_transferida/{idFilialOrigem}/{idRegistroNotaOrigem} - Excluir dados coletados de Notas Transferidas
// Exclui os dados coletados da nota transferida, zerando campo quantidade coletado e voltanto situação para A Coletar

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilialOrigem = ""; //integer - OBRIGATÓRIO
const idRegistroNotaOrigem = ""; //integer - OBRIGATÓRIO

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });