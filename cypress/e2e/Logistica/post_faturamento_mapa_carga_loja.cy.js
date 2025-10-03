// /v3/faturamento_mapa_carga_loja - Dados de mapa de carga loja
// Faturar pedidos de loja que estão em um mapa de carga loja, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Logística/v3_post_logistica_faturamentomapacargaloja';
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/faturamento_mapa_carga_loja', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${APIBASE_URL_URL}/${PATH_API}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].registrosNota[0]).toHaveProperty('idRegistroNota');
        });
    });
  });