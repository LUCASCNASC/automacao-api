// /v3/itens_inventario/{idFilial}/{idInventario} - Itens do Inventário
// Lista os itens do inventários.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //integer - OBRIGATÓRIO
const idInventario = ""; //integer - OBRIGATÓRIO

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', { env: { hideCredendials: true } }, () => {
  
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
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idProduto');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeX');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('idGradeY');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('codigoBarra');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoInventario');
          expect(resposta.body.retorno[0].inventarios[0]).toHaveProperty('saldoFilial');

        });
    });
  });