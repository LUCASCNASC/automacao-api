// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Sistema - GET - /v3/parametros_sitema', () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('usaintencaocompra');
          expect(resposta.body.retorno[0]).toHaveProperty('usaposvenda');
          expect(resposta.body.retorno[0]).toHaveProperty('maximodiasprevisaoentrega');
          expect(resposta.body.retorno[0]).toHaveProperty('visualizarmgc');
          expect(resposta.body.retorno[0]).toHaveProperty('maximodiaspropostacredito');
          expect(resposta.body.retorno[0]).toHaveProperty('url_ecommerce');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuarioremetente');
          expect(resposta.body.retorno[0]).toHaveProperty('trialremoverinfocomplementarcadastrocliente');
          expect(resposta.body.retorno[0]).toHaveProperty('trialremoveranexocadastrocliente');
        });
    });
  });