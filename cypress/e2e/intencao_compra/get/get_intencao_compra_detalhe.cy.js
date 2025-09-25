// /v3/intencao_compra_detalhe/{codigo} - Intenções de compras
// Lista intenções de compras
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number 
const cliente = ""; //string 
const situacao = ""; //number 

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Intenção%20compra/v2_intencao_compra_detalhe/${codigo}/${cliente}/${situacao}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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