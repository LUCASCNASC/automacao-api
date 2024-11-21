// /v3/inventario - Inventários
// Lista os inventários em aberto e que não estejam com a data limite da contagem expirada. Se usuário for gerente, lista os inventários de todos os usuários

describe('Inventário - GET - /v3/inventario', () => {
    const url = 'http://localhost:8091/sabium#/Invent%C3%A1rio/v3_get_inventario';
  
    it('GET - /v3/inventario - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });