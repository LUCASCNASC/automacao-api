// /v3/login_complementos - Dados complementares do login
// Carregar dados do funcionário e vendedor com base no usuário conectado

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Sessão - GET - /v3/login_complementos', () => {
  const url = '/Sess%C3%A3o/v2_sessao_login_complementos';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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