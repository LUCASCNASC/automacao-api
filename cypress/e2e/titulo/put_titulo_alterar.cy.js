// /v3/titulo_alterar - Alterar Titulo A Receber/Pagar
// Alteracao A Receber/Pagar de Titulo e Parcelas
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Titulo - PUT - /v3/titulo_alterar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.api({
        method: 'PUT', 
        url: `${API_URL}/Titulo/v3_put_titulo_alterar`, 
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