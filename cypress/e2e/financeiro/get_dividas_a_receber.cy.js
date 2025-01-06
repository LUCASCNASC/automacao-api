// /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Lista títulos (a receber)
// Listar títulos a receber de cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO
const cpf_cnpj = ""; //string - OBRIGATÓRIO
const separarvinculados = ""; //boolean
const limit = ""; //number
const offset = ""; //number

describe('Financeiro - GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj}', () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('idEmpresa');
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idParcelaTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idParcialTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('parcela');
          expect(resposta.body.retorno[0]).toHaveProperty('processo');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaoProcesso');
          expect(resposta.body.retorno[0]).toHaveProperty('calculaJurosBacen');
          expect(resposta.body.retorno[0]).toHaveProperty('dataInclusao');
          expect(resposta.body.retorno[0]).toHaveProperty('dataVencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('diasVencido');
          expect(resposta.body.retorno[0]).toHaveProperty('valorOriginal');
          expect(resposta.body.retorno[0]).toHaveProperty('possuiboleto');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('tipo');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('permiteParcial');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('permiteDesconto');
          expect(resposta.body.retorno[0].formasPagamento[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].pedidos[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].pedidos[0]).toHaveProperty('idPedidoVenda');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idEmpresa');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idTitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idParcelaTitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idParcialTitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('parcela');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('processo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('descricaoProcesso');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('calculaJurosBacen');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('dataInclusao');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('dataVencimento');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('diasVencido');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('valorOriginal');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('possuiboleto');
          expect(resposta.body.retorno[0].vinculados[0].formasPagamento[0]).toHaveProperty('tipo');
          expect(resposta.body.retorno[0].vinculados[0].formasPagamento[0]).toHaveProperty('permiteParcial');
          expect(resposta.body.retorno[0].vinculados[0].formasPagamento[0]).toHaveProperty('permiteDesconto');
          expect(resposta.body.retorno[0].vinculados[0].formasPagamento[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].vinculados[0].pedidos[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0].vinculados[0].pedidos[0]).toHaveProperty('idPedidoVenda');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadeTotalRegistro');
        });
    });
  });