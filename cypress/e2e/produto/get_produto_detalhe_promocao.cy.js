// /v3/produto_detalhe_promocao/{produto} - Promoções do produto
// Promoções do produto.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const produto = ""; //number - OBRIGATÓRIO
const processo_venda = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_detalhe_promocao/{produto}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_detalhe_promocao/${produto}/${processo_venda}`,
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('idgrupopreco');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('validade');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('numerominimoparcelas');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('numeromaximoparcelas');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('tipovendapromocao');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('idtipoprazopromocao');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('porprocessodevenda');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('tipoOperacao');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('diasprimeiraparcela');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('diasminimoprimeiraparcela');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('diasmaximoprimeiraparcela');
          expect(resposta.body.retorno[0].promocao[0].formaspagamento[0]).toHaveProperty('tipocartaofidelidadevalido');
          expect(resposta.body.retorno[0].promocao[0].tiposervicoisentojuros[0]).toHaveProperty('idtiposervico');
          expect(resposta.body.retorno[0].promocao[0].tiposervicoisentojuros[0]).toHaveProperty('descricaotiposervico');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('valoraparcelar');
          expect(resposta.body.retorno[0].promocao[0]).toHaveProperty('valorentradaobrigatoria');
        });
    });
  });