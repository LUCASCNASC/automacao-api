// /v3/corrigir_saldo_medio_produtos - Correção de saldo e custo médio
// Corrigir saldo e custo médio de produtos nas filiais
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/corrigir_saldo_medio_produtos', { env: { hideCredendials: true } }, () => {
  
    it('POST - /v3/corrigir_saldo_medio_produtos - Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Fisco/Contabil/v3_post_corrigir_saldo_medio_produtos`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('Id_Empresa');
          expect(response.body.retorno[0]).toHaveProperty('Id_Filial_Matriz');
          expect(response.body.retorno[0]).toHaveProperty('Id_Processamento');
        });
    });
  });