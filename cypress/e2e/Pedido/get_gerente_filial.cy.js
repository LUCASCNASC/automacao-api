// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idUsuario');
          expect(resposta.body.retorno[0]).toHaveProperty('login');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });