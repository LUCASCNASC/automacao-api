// /v3/login_complementos - Dados complementares do login
// Carregar dados do funcionário e vendedor com base no usuário conectado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const ambiente = ""; //string - OBRIGATÓRIO

describe('Sessão - GET - /v3/login_complementos', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET',
        url: url,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('login');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('vendedor');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('tipoFilialRelacionada');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('padrao');
          expect(resposta.body.retorno[0].filiais[0]).toHaveProperty('vendaremotasementrega');
          expect(resposta.body.retorno[0]).toHaveProperty('gerente');
          expect(resposta.body.retorno[0]).toHaveProperty('administrador');
          expect(resposta.body.retorno[0]).toHaveProperty('nivelacessodadopessoal');
          expect(resposta.body.retorno[0]).toHaveProperty('utilizaappsabium');
        });
    });
  });