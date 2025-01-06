// /v3/departamento - Lista de departamento
// Listas dos departamentos.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - GET - /v3/departamento', () => {
  const url = '/Produto/v2_produto_departamento';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_get_departamento,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0].departamento[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].departamento[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].departamento[0]).toHaveProperty('imagem');
        });
    });
  });