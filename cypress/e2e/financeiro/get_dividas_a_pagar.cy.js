// /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Lista títulos (a Pagar)
// Listar títulos a pagar de cliente ou fornecedor

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idFilial = ""; //number - OBRIGATÓRIO
const cpf_cnpj = ""; //string - OBRIGATÓRIO

describe('Financeiro - GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Financeiro/v3_financeiro_dividas_pagar/${idFilial}/${cpf_cnpj}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idParcelaTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idParcialTitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('dataVencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
        });
    });
  });