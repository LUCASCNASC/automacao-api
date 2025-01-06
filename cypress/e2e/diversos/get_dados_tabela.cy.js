// /v3/dados_tabela/{tabela} - Tabelas do sistema
// Carregar dados das tabelas com registros fixos no sistema

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const tabela = "" //string - OBRIGATÓRIO

describe('Diversos - GET - /v3/dados_tabela/{tabela}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });