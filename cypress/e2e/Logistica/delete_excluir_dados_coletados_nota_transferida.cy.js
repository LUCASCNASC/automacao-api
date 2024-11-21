// /v3/excluir_dados_coletados_nota_transferida/{idFilialOrigem}/{idRegistroNotaOrigem} - Excluir dados coletados de Notas Transferidas
// Exclui os dados coletados da nota transferida, zerando campo quantidade coletado e voltanto situação para A Coletar

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_delete_excluir_dado_coletado_nota_transferida';
  
    it('DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });