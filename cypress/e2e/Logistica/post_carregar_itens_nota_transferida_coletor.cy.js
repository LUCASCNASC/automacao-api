// /v3/carregar_itens_nota_transferida_coletor - Carregar itens notas a receber transferidas
// Carregar itens notas a receber transferidas com as quantidades e produtos a serem coletados

describe('Logística - POST - /v3/carregar_itens_nota_transferida_coletor', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_mapa_carga_acarregar_itens';
  
    it('POST - /v3/carregar_itens_nota_transferida_coletor - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });