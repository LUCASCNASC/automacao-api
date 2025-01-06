// /v3/nota_receber_transferida_coletor/{idFilial} - Carrega de Notas Transferidas
// Carrega as notas transferidas para filial destino para coletor de dados

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - GET - /v3/nota_receber_transferida_coletor/{idFilial}', () => {
    const url = '/Log%C3%ADstica/v3_get_carregar_nota_transferida_coletor';
    const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
        });
    });
  });