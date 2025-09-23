// /v3/produto - Informações do produto
// Dados dos produtos.
//204 - Sem dados de retorno
//200 - OK
//401 - Sem permissão para acessar este recurso

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const termo = ""; //string - OBRIGATÓRIO
const departamento = ""; //string - OBRIGATÓRIO
const marca = ""; //string - OBRIGATÓRIO
const so_promocao = ""; //boolean - OBRIGATÓRIO
const so_servico = ""; //boolean - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto ', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_get/${termo}/${departamento}/${marca}/${so_promocao}/${so_servico}`, 
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