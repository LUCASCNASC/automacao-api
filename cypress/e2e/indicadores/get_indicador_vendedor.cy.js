// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const ano = ""; //number - OBRIGATÓRIO
const mes = ""; //number - OBRIGATÓRIO
const dia = ""; //number - OBRIGATÓRIO

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', () => {

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
          expect(resposta.body.retorno[0]).toHaveProperty('titulo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('ordemexibicao');
          expect(resposta.body.retorno[0]).toHaveProperty('tipoindicador');
          expect(resposta.body.retorno[0].dados[0]).toHaveProperty('valor');
        });
    });
  });