// /v3/produto_destaque - Produtos em destaque
// Lista de produtos em destaque.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const id_processo = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_destaque ', { env: { hideCredendials: true } }, () => {
  
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