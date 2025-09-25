// /v3/nota_receber_transferida_coletor/{idFilial} - Carrega de Notas Transferidas
// Carrega as notas transferidas para filial destino para coletor de dados
//200 - OK
//204 - Sem dados de retorno
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO

describe('Logística - GET - /v3/nota_receber_transferida_coletor/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Logística/v3_get_carregar_nota_transferida_coletor/${idFilial}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        });
    });
  });