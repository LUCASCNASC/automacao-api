// /v3/movimento_assistencia_incluir/ - Incluir Movimento de Assistência
// Incluir Movimento de Assistência Estoque, Patrimonio e Cliente.
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Assistencia - POST - /v3/movimento_assistencia_incluir/', { env: { hideCredendials: true } }, () => {
  const url = `${BASE_URL}/Assistencia/v3_post_movimento_assistencia_incluir`;

  it('Deve retornar 200 e validar as propriedades do retorno', () => {
    cy.api({
      method: 'POST',
      url,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adapte o payload conforme o esperado pela API:
        // Exemplo fictício:
        Empresa: "empresaExemplo",
        Filial: "filialExemplo",
        ID_Registro_Nota: 123,
        Qtde_Assistencias: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body.retorno).to.be.an('array').and.not.be.empty;
      const item = response.body.retorno[0];
      expect(item).to.have.property('Empresa');
      expect(item).to.have.property('Filial');
      expect(item).to.have.property('ID_Registro_Nota');
      expect(item).to.have.property('Qtde_Assistencias');
      expect(item).to.have.property('Erros');
    });
  });
});