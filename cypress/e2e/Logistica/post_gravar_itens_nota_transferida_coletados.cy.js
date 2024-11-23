// /v3/gravar_itens_nota_transferida_coletados - Gravar Itens Nota Recebida Coletados
// Insere e atualiza a tabela de itembase nota transferida com os dados coledatos

describe('Logística - POST - /v3/gravar_itens_nota_transferida_coletados', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_gravar_itens_nota_transferida_coletados';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/gravar_itens_nota_transferida_coletados - Resposta 200', () => {
      const requestBody = [
        {
          "idfilialdestino": 0,
          "idfilialorigem": 0,
          "iditembaseorigem": 0,
          "idregistronotaorigem": 0,
          "quantidadeacoletar": 0,
          "quantidadecoletado": 0,
          "idsituacaocoletanotatransferida": 0,
          "observacao": "string"
        }
      ]
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });