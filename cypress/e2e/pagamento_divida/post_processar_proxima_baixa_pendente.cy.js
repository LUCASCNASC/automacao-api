// /v3/processar_proxima_baixa_pendente - Baixa pendente
// Processar proxima baixa pendente
//200 - OK
//204 - Sem dados de retorno
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/processar_proxima_baixa_pendente', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Pagamento%20divida/v2_divida_processar_proxima_baixa_pendente`, 
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