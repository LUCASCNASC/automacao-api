// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Fisco/Contabil/v3_post_documento_outras_receitas_incluir`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
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