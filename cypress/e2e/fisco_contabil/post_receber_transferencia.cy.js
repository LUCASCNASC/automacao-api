// /v3/receber_transferencia - Recebimento de nota fiscal de transferência
// Receber nota fiscal de transferência entre filiais

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/receber_transferencia', { env: { hideCredendials: true } }, () => {
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Fisco/Contabil/v3_post_receber_transferencia`, 
        headers: { Authorization },
        
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('Filial');
          expect(response.body.retorno[0]).toHaveProperty('IgnorarSituacaoSefaz');
          expect(response.body.retorno[0].Notas[0]).toHaveProperty('IdFilialOrigem');
          expect(response.body.retorno[0].Notas[0]).toHaveProperty('NumeroNota');
          expect(response.body.retorno[0].Notas[0]).toHaveProperty('IdNFeSefaz');
          expect(response.body.retorno[0]).toHaveProperty('Mensagem');
          expect(response.body.retorno[0]).toHaveProperty('QtdeNotasRecebidas');
        });
    });
  });