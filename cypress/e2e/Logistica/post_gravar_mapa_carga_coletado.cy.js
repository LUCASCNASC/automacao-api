// /v3/gravar_mapa_carga_coletado - Altera a situação do mapa de carga cliente/loja para Coletado
// Finaliza a coleta do mapa de carga e/ou atualiza os itens coletados

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/gravar_mapa_carga_coletado', () => {
  const url = '/Log%C3%ADstica/v3_post_gravar_mapa_carga_coletado';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_gravar_mapa_carga_coletado,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });