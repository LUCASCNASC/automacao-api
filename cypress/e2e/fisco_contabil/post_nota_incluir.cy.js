// /v3/nota_incluir/ - Inclusão de nota fiscal
// Incluir nota fiscal, estoque e títulos, com base no XML

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/nota_incluir/', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('CNPJ_Filial_Nota');
          expect(response.body.retorno[0]).toHaveProperty('CNPJ_CPF_Nota');
          expect(response.body.retorno[0]).toHaveProperty('Data_Movimento');
          expect(response.body.retorno[0]).toHaveProperty('Numero_Nota');
          expect(response.body.retorno[0]).toHaveProperty('Id_Registro_Nota');
          expect(response.body.retorno[0]).toHaveProperty('Id_Titulo');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });