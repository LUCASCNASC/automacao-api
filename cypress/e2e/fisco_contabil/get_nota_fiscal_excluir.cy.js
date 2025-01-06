// /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota} - Exclusão de nota fiscal
// Excluir nota fiscal

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idRegistroNota = ""; //integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Filial');
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Registro_Nota');
          expect(resposta.body.retorno[0]).toHaveProperty('Status');
          expect(resposta.body.retorno[0]).toHaveProperty('Atenção');
          expect(resposta.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });