// /v3/nota_receber_transferida_coletor/{idFilial} - Carrega de Notas Transferidas
// Carrega as notas transferidas para filial destino para coletor de dados

describe('Logística - GET - /v3/nota_receber_transferida_coletor/{idFilial}', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_get_carregar_nota_transferida_coletor';
  
    it('GET - /v3/nota_receber_transferida_coletor/{idFilial} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });