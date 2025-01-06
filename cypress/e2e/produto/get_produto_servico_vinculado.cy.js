// /v3/produto_servico_vinculado - Preços do produto
// Preços do produto.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const sku = ""; //string - OBRIGATÓRIO
const valor = ""; //number - OBRIGATÓRIO
const tipo_servico = ""; //number - OBRIGATÓRIO
const processo = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_servico_vinculado ', { env: { hideCredendials: true } }, () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('solicitarTelefone');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigoEntidade');
          expect(resposta.body.retorno[0].servicos[0].faixa[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorMinimo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorMaximo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('permiteAlterar');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('lancarautomatico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('bonificado');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('trialRemoverServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('produtodescricao');
          expect(resposta.body.retorno[0].servicos[0].processoisentojuros[0]).toHaveProperty('idprocesso');
          expect(resposta.body.retorno[0].servicos[0].processoisentojuros[0]).toHaveProperty('descricaoprocesso');
          expect(resposta.body.retorno[0].servicos[0].servicosagregados[0]).toHaveProperty('idservico');
          expect(resposta.body.retorno[0].servicos[0].servicosagregados[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].servicos[0].servicosagregados[0]).toHaveProperty('valorservico');
          expect(resposta.body.retorno[0].servicos[0].servicosagregados[0]).toHaveProperty('obrigatorio');
        });
    });
  });