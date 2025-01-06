// /v3/gravar_itens_nota_transferida_coletados - Gravar Itens Nota Recebida Coletados
// Insere e atualiza a tabela de itembase nota transferida com os dados coledatos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/gravar_itens_nota_transferida_coletados', () => {
  const url = '/Log%C3%ADstica/v3_post_gravar_itens_nota_transferida_coletados';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_gravar_itens_nota_transferida_coletados,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });