// /v3/produto_servico_vinculado - Preços do produto
// Preços do produto.
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const sku = ""; //string - OBRIGATÓRIO
const valor = ""; //number - OBRIGATÓRIO
const tipo_servico = ""; //number - OBRIGATÓRIO
const processo = ""; //number - OBRIGATÓRIO

describe('Produtos - GET - /v3/produto_servico_vinculado ', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Produto/v2_produto_servico_vinculado/${sku}/${valor}/${tipo_servico}/${processo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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