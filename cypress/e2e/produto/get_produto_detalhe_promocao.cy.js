// /v3/produto_detalhe_promocao/{produto} - Promoções do produto
// Promoções do produto.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_detalhe_promocao/{produto} ', () => {
  const url = '/Produto/v2_produto_detalhe_promocao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        produto: "",
        processo_venda: ""
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