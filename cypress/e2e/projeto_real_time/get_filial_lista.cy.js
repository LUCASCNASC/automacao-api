// /v3/filial_lista/ - Dados Filial - Retorna uma lista das filiais

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Projeto Real Time - GET - /v3/filial_lista/', () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('EMPRESA');
          expect(resposta.body.retorno[0]).toHaveProperty('CNPJ');
          expect(resposta.body.retorno[0]).toHaveProperty('RAZAO_SOCIAL');
          expect(resposta.body.retorno[0]).toHaveProperty('LOGRADOURO');
          expect(resposta.body.retorno[0]).toHaveProperty('NUMERO');
          expect(resposta.body.retorno[0]).toHaveProperty('COMPLEMENTO');
          expect(resposta.body.retorno[0]).toHaveProperty('CIDADE');
          expect(resposta.body.retorno[0]).toHaveProperty('UF');
          expect(resposta.body.retorno[0]).toHaveProperty('CEP');
        });
    });
  });