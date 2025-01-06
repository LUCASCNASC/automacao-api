// /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota} - Exclusão de nota fiscal
// Excluir nota fiscal

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - GET - /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota}', () => {
  const url = '/Fisco/Contabil/v3_nota_fiscal_excluir';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idRegistroNota: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Filial');
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Registro_Nota');
          expect(resposta.body.retorno[0]).toHaveProperty('Status');
          expect(resposta.body.retorno[0]).toHaveProperty('Atenção');
          expect(resposta.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });