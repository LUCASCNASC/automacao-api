// /v3/produto_detalhe/{produto} - Detalhes do produto
// Detalhes do produto.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const produto = ""; //string - OBRIGATÓRIO
const pesquisagtin = ""; //boolean - OBRIGATÓRIO
const pedido = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_detalhe/{produto}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Produto/v2_produto_detalhe/${produto}/${pesquisagtin}/${pedido}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('marca');
          expect(resposta.body.retorno[0]).toHaveProperty('detalhes_produto');
          expect(resposta.body.retorno[0]).toHaveProperty('solicitarSerie');
          expect(resposta.body.retorno[0]).toHaveProperty('exibirListaSerie');
          expect(resposta.body.retorno[0]).toHaveProperty('pedirNumeroCelular');
          expect(resposta.body.retorno[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0]).toHaveProperty('preco_de');
          expect(resposta.body.retorno[0]).toHaveProperty('preco_por');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('preco_de');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('preco_por');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('permitesolicitarcompra');
          expect(resposta.body.retorno[0].grades[0]).toHaveProperty('temsaldo');
          expect(resposta.body.retorno[0].grades[0].fotos[0]).toHaveProperty('pequena');
          expect(resposta.body.retorno[0].grades[0].fotos[0]).toHaveProperty('media');
          expect(resposta.body.retorno[0].grades[0].fotos[0]).toHaveProperty('grande');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('codigo_filial');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('numero_filial');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('fantasia_filial');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('idfilialsaldo');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('estoque');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('data_entrega');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('permite_montagem');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('permite_entrega');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('entrega_obrigatoria');
          expect(resposta.body.retorno[0].grades[0].estoques[0]).toHaveProperty('tempromocao');
          expect(resposta.body.retorno[0].grades[0].tipos_grupo_servico[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].grades[0].tipos_grupo_servico[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].grades[0].tipos_grupo_servico[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].grades[0].tipos_grupo_servico[0].servicos[0]).toHaveProperty('string');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).toHaveProperty('descricaoprodutograde');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).fotos[0].toHaveProperty('pequena');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).fotos[0].toHaveProperty('media');
          expect(resposta.body.retorno[0].grades[0].composicao[0]).fotos[0].toHaveProperty('grande');
          expect(resposta.body.retorno[0]).toHaveProperty('ordem');
        });
    });
  });