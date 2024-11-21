// /v3/gravar_itens_nota_transferida_coletados - Gravar Itens Nota Recebida Coletados
// Insere e atualiza a tabela de itembase nota transferida com os dados coledatos

describe('Logística - POST - /v3/gravar_itens_nota_transferida_coletados', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_gravar_itens_nota_transferida_coletados';
  
    it('POST - /v3/gravar_itens_nota_transferida_coletados - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });