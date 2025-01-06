// /v3/movimento_compra_venda/ - Dados Movimento - Retorna os movimentos de entrada e saída dos produtos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Projeto Real Time - POST - /v3/movimento_compra_venda/', () => {
  
    it('POST - /v3/movimento_compra_venda/ - Resposta 200', { env: { hideCredendials: true } }, () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj');
          expect(resposta.body.retorno[0]).toHaveProperty('data_inicial');
          expect(resposta.body.retorno[0]).toHaveProperty('data_final');
          expect(resposta.body.retorno[0]).toHaveProperty('hora_inicial');
          expect(resposta.body.retorno[0]).toHaveProperty('hora_final');
        });
    });
  });