// /v3/rota_cidade - Rota Cidade
// Listar rotas por cidade

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/rota_cidade', () => {
  const url = '/Diversos/v3_diversos_rota_cidade';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idgruporota: "",
        idrota: "",
        idrotacidade: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idgruporota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0]).toHaveProperty('idrotacidade');
          expect(resposta.body.retorno[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].cidade[0]).toHaveProperty('descricao');
        });
    });
  });