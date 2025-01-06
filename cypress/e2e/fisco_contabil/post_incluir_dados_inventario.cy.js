// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('CNPJ_Filial');
          expect(response.body.retorno[0]).toHaveProperty('Data_Inventario');
          expect(response.body.retorno[0]).toHaveProperty('Codigo_Inventario_PDA');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });