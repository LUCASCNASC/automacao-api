// /v3/excluir_titulo_areceber_apagar - Exclusão de título (a receber ou a pagar)
// Efetuar a exclusão de título a receber ou a pagar

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/excluir_titulo_areceber_apagar', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('Empresa');
          expect(response.body.retorno[0]).toHaveProperty('Filial');
          expect(response.body.retorno[0]).toHaveProperty('Titulo');
          expect(response.body.retorno[0]).toHaveProperty('CNPJ_CPF');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });