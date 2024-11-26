// /v3/parametros_sitema - Parâmetros do sistema
// Lista informações de parâmetros da empresa

describe('Sistema - GET - /v3/parametros_sitema', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_parametro_sistema';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/parametros_sitema - Resposta 200', () => {
      const requestBody = {
        "usaintencaocompra": true,
        "usaposvenda": true,
        "maximodiasprevisaoentrega": true,
        "visualizarmgc": true,
        "maximodiaspropostacredito": true,
        "url_ecommerce": "string",
        "idusuarioremetente": true,
        "trialremoverinfocomplementarcadastrocliente": 0,
        "trialremoveranexocadastrocliente": 0
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });