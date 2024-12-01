// /v3/nota_receber_transferida_coletor/{idFilial} - Carrega de Notas Transferidas
// Carrega as notas transferidas para filial destino para coletor de dados

describe('Logística - GET - /v3/nota_receber_transferida_coletor/{idFilial}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Log%C3%ADstica/v3_get_carregar_nota_transferida_coletor', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });