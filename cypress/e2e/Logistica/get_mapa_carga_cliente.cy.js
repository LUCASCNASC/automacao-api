// /v3/mapa_carga_cliente/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal} - Lista Mapa Carga Cliente
// Retorna uma lista com os mapas de carga cliente, de acordo com o preenchimento dos parâmetros de entrada:

describe('Logística - GET - /v3/mapa_carga_cliente/{idFilial}/{idSituacaoMapaCarga}/{dataInicial}/{dataFinal}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 

    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idSituacaoMapaCarga: "",
        dataInicial: "",
        dataFinal: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Log%C3%ADstica/v3_get_logistica_lista_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });