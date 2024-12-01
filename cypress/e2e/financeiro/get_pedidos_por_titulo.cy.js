// /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo} - Lista pedidos por título
// Retornar lista de pedidos que originaram o título

describe('Financeiro - GET - /v3/pedidos_por_titulo/{idFilial}/{idTitulo}/{idTipoTitulo}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idTitulo: "",
        idTipoTitulo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_pedidos_por_titulo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });