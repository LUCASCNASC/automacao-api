// /v3/carregar_itens_nota_transferida_coletor - Carregar itens notas a receber transferidas
// Carregar itens notas a receber transferidas com as quantidades e produtos a serem coletados

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //
          // 'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialdestino');
          expect(resposta.body.retorno[0]).toHaveProperty('iditembaseorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilialorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('idregistronotaorigem');
          expect(resposta.body.retorno[0]).toHaveProperty('codigobarra');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadeacoletar');
          expect(resposta.body.retorno[0]).toHaveProperty('quantidadecoletado');
          expect(resposta.body.retorno[0]).toHaveProperty('idsituacaocoletanotatransferida');
          expect(resposta.body.retorno[0]).toHaveProperty('observacao');
          expect(resposta.body.retorno[0]).toHaveProperty('idproduto');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });