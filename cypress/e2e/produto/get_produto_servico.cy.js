// /v3/produto_servico/{servico} - Serviço preço
// Preço do serviço

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Produtos - GET - /v3/produto_servico/{servico} ', () => {
  const url = '/Produto/v2_produto_servico';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        servico: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0]).toHaveProperty('solicitarTelefone');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('codigoentidade');
          expect(resposta.body.retorno[0].servicos[0].faixa[0]).toHaveProperty('valorFinal');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorMinimo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('valorMaximo');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('permiteAlterar');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('lancarautomatico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('trialRemoverServico');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].servicos[0]).toHaveProperty('produtodescricao');
        });
    });
  });