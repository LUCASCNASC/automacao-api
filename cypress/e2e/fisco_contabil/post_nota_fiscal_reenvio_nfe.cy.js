// /v3/nota_fiscal_reenvio_nfe/ - Nota Fiscal (Reenvio)
// Realizar o reenvio da nota fiscal NFe

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/nota_fiscal_reenvio_nfe/', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('Quantidade_Processadas');
          expect(response.body.retorno[0]).toHaveProperty('Processadas_com_Erro');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });