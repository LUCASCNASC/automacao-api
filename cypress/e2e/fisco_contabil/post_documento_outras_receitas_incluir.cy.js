// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', { env: { hideCredendials: true } }
  , () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('Status_Retorno');
          expect(response.body.retorno[0]).toHaveProperty('CNPJ_Filial');
          expect(response.body.retorno[0]).toHaveProperty('Numero_Documento_Diverso');
          expect(response.body.retorno[0]).toHaveProperty('Numero_Registro_Nota');
          expect(response.body.retorno[0]).toHaveProperty('Numero_Titulo');
          expect(response.body.retorno[0]).toHaveProperty('Numero_Lancamento_Conta_Corrrente');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });