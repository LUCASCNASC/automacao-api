// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Lista de Filial
// Retorna uma lista das filiais de acordo com os parâmetros informados

describe('Filial - GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        UF: "",
        Municipio: "",
        Tipo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Filial/v3_get_filial_por_tipo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });