// /v3/filial_lista/ - Dados Filial - Retorna uma lista das filiais

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Projeto Real Time - GET - /v3/filial_lista/', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      
      cy.api({
        method: 'GET', 
        url: `${API_URL}/Projeto%20Real%20Time/v3_get_filial_lista`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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