// /v3/gravar_mapa_carga_coletado - Altera a situação do mapa de carga cliente/loja para Coletado
// Finaliza a coleta do mapa de carga e/ou atualiza os itens coletados
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/gravar_mapa_carga_coletado', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Logística/v3_post_gravar_mapa_carga_coletado`, 
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