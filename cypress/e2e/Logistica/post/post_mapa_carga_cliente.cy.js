// /v3/mapa_carga_cliente - Dados de Mapa de Carga Cliente
// Incluir/alterar cadastro de mapa de carga cliente
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/mapa_carga_cliente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Logística/v3_post_logistica_mapa_carga_cliente`, 
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