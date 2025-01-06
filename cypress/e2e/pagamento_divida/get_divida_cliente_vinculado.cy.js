// /v3/divida_cliente_vinculado/{filial}/{cliente} - Títulos vinculados do cliente
// lista de títulos vinculados a receber do cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pagamento divida - GET - /v3/divida_cliente_vinculado/{filial}/{cliente}', () => {
  const url = '/Pagamento%20divida/v2_divida_cliente_vinculado';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        cliente: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0].vinculados[0]).toHaveProperty('valor');
        });
    });
  });