// /v3/carregar_itens_nota_transferida_coletor - Carregar itens notas a receber transferidas
// Carregar itens notas a receber transferidas com as quantidades e produtos a serem coletados

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/carregar_itens_nota_transferida_coletor - Resposta 200', () => {
      const requestBody = {
        "idfilialdestino": 0,
        "Notas Coletar": [
          {
            "idfilialorigem": 0,
            "idregistronotaorigem": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });