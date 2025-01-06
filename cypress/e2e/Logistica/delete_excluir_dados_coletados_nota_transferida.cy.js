// /v3/excluir_dados_coletados_nota_transferida/{idFilialOrigem}/{idRegistroNotaOrigem} - Excluir dados coletados de Notas Transferidas
// Exclui os dados coletados da nota transferida, zerando campo quantidade coletado e voltanto situação para A Coletar

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - DELETE - /v3/exluir_mapa_carga_coletado/{idFilial}/{idMapaCarga}/{TipoMapaCarga}', () => {
  const url = '/Log%C3%ADstica/v3_delete_excluir_dado_coletado_nota_transferida';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilialOrigem: "",
        idRegistroNotaOrigem: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });