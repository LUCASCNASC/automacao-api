// /v3/produto_relacionado - Produtos relacionados
// produtos relacionados.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const lista = ""; //string - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_relacionado ', { env: { hideCredendials: true } }
  , () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('departamento_codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('departamento_descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('marca_codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('marca_descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0]).toHaveProperty('ordem');
        });
    });
  });