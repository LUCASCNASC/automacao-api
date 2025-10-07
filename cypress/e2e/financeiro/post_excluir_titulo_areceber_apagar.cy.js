const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_excluir_titulo_areceber_apagar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/excluir_titulo_areceber_apagar', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 e as propriedades da exclusão de título', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idTitulo: 222
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Empresa');
      expect(ret).to.have.property('Filial');
      expect(ret).to.have.property('Titulo');
      expect(ret).to.have.property('CNPJ_CPF');
      expect(ret).to.have.property('Erros');
    });
  });

  it('Deve retornar 412 ao tentar excluir título com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});