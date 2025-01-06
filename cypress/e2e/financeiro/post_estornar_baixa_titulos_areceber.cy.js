// /v3/estornar_baixa_titulo_areceber - Estorno de baixa de título
// Efetuar o estorno da baixa do título a receber, gerando um novo título a pagar

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/estornar_baixa_titulo_areceber', () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('Qtde_Baixa_Estornadas');
          expect(response.body.retorno[0]).toHaveProperty('Titulo_AReceber_Gerado');
          expect(response.body.retorno[0]).toHaveProperty('Titulo_APagar_Gerado');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });