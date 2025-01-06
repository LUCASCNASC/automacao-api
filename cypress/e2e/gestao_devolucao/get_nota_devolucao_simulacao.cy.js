// /v3/nota_devolucao_simulacao/{filial}/{solicitacao} - Simulação de Nota Devolução
// Simulação da nota de devolução da solicitação. Retorna as notas que foram incluídas para simulação da solicitação da nota de devolução para avaliação interna da empresa.

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const filial = ""; //number - OBRIGATÓRIO
const solicitacao = ""; //number - OBRIGATÓRIO
const Authorization2 = ""; //string - OBRIGATÓRIO

describe('Gestão Devolução - GET - /v3/nota_devolucao_simulacao/{filial}/{solicitacao}', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '', 
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
          expect(resposta.body.retorno[0].empresa[0]).toHaveProperty('naturezaOperacao');
          expect(resposta.body.retorno[0].empresa[0]).toHaveProperty('inscricaoEstadual');
          expect(resposta.body.retorno[0].empresa[0]).toHaveProperty('inscricaoEstadualSubstituicao');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('razaoSocial');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('CNPJ');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('inscricaoEstadual');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('logradouro');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('CEP');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('municipio');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('UF');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('DDD');
          expect(resposta.body.retorno[0].fornecedor[0]).toHaveProperty('telefone');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('SKU');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('modelo');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('cor');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('ncm');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('cst');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('codigofabricante');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorAproximadoTributos');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('pesoBruto');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('pesoLiquido');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('CFOP');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('unidade');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorUnitario');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorTotal');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('desconto');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('baseCalculoICMS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('aliquotaICMS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorICMS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('baseCalculoST');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('aliquotaST');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorST');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('baseCalculoIPI');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('aliquotaIPI');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorIPI');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('baseCalculoPIS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('aliquotaPIS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorPIS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('baseCalculoCOFINS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('aliquotaCOFINS');
          expect(resposta.body.retorno[0].itens[0]).toHaveProperty('valorCOFINS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('nota');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('frete');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('seguro');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('desconto');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('despesas');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('produto');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('baseCalculoICMS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('valorICMS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('outras');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('baseCalculoST');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('valorST');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('baseCalculoIPI');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('valorIPI');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('baseCalculoPIS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('valorPIS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('baseCalculoCOFINS');
          expect(resposta.body.retorno[0].total[0]).toHaveProperty('valorCOFINS');
        });
    });
  });