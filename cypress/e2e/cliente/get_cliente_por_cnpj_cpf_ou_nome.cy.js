// /v3/cliente_por_cnpj_cpf_ou_nome/{valor} - Buscar Cliente por CNPJ/CPF ou parte do NOME
// Dados do cliente simplificado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const valor = "" //string - OBRIGATÓRIO

describe('Cliente - GET - /v3/cliente_por_cnpj_cpf_ou_nome/{valor}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });