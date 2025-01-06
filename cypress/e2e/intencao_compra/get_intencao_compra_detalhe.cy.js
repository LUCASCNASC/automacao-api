// /v3/intencao_compra_detalhe/{codigo} - Intenções de compras
// Lista intenções de compras

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_detalhe';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: "",
        cliente: "",
        situacao: ""
      }

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
          expect(resposta.body.retorno[0]).toHaveProperty('cliente');
          expect(resposta.body.retorno[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0]).toHaveProperty('telefonefixo');
          expect(resposta.body.retorno[0]).toHaveProperty('telefonecelular');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('departamento_codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('departamento_descricao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('marca_codigo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('marca_descricao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('ordem');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('dtregistrado');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('motivo');
          expect(resposta.body.retorno[0].produtos[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('departamento_codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('departamento_descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('marca_codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('marca_descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('servico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('imagem');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('ordem');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('idintencaocompra');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorprodutointencao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('dtregistrado');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('motivo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('observacao')
        });
    });
  });