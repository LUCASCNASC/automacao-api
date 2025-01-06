// /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME
// Dados do cliente simplificado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Cliente - GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor}', () => {
  const url = '/Cliente/v3_cliente_por_cnpj_cpf_ou_nome';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        valor: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });