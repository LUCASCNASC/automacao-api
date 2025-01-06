// /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota} - Inutiliza nota fiscal de conhecimento de saída
// Inutilizar nota fiscal de conhecimento, registrado no sistema

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const Filial = ""; //integer - OBRIGATÓRIO
const RegistroNota = ""; //integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/nota_fiscal_inutilizar_conhecimento_saida/{Filial}/{RegistroNota}', () => {
    
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
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Filial');
          expect(resposta.body.retorno[0]).toHaveProperty('ID_Registro_Nota');
          expect(resposta.body.retorno[0]).toHaveProperty('Status');
          expect(resposta.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });