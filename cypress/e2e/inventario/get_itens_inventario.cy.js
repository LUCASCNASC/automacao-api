// /v3/itens_inventario/{idFilial}/{idInventario} - Itens do Inventário
// Lista os itens do inventários.

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', () => {
    const url = 'http://localhost:8091/sabium#/Invent%C3%A1rio/v3_get_itens_inventario';
  
    it('GET - /v3/itens_inventario/{idFilial}/{idInventario} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });