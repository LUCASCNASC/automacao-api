// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Lista de Filial
// Retorna uma lista das filiais de acordo com os parâmetros informados

describe('Filial - GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', () => {
    const url = 'http://localhost:8091/sabium#/Filial/v3_get_filial_por_tipo';
  
    it('GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });