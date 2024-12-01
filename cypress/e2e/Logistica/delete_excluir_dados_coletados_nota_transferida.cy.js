// /v3/excluir_dados_coletados_nota_transferida/{idFilialOrigem}/{idRegistroNotaOrigem} - Excluir dados coletados de Notas Transferidas
// Exclui os dados coletados da nota transferida, zerando campo quantidade coletado e voltanto situação para A Coletar

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilialOrigem: "",
        idRegistroNotaOrigem: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Log%C3%ADstica/v3_delete_excluir_dado_coletado_nota_transferida', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });