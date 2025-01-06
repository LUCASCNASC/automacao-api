// /v3/recarga/{idFilial}/{idItemServico} - Dados Recarga Efetuada
// Retorna os dados da recarga efetuada

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Recarga - GET - /v3/recarga/{idFilial}/{idItemServico}', () => {
  const url = '/Recarga/v3_get_recarga';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idItemServico: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('cnpjCpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeCliente');
          expect(resposta.body.retorno[0]).toHaveProperty('idOperadoraTelefone');
          expect(resposta.body.retorno[0]).toHaveProperty('numeroTelefone');
          expect(resposta.body.retorno[0]).toHaveProperty('formaPagamento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('nsu');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('nsuHost');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('copiaRecibo');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('autorizacao');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('modalidade');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('instituicao');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('operadora');
          expect(resposta.body.retorno[0].dadosTEF[0]).toHaveProperty('valor');
        });
    });
  });