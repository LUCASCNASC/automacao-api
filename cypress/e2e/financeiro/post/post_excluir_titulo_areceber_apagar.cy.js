// /v3/excluir_titulo_areceber_apagar - Exclusão de título (a receber ou a pagar)
// Efetuar a exclusão de título a receber ou a pagar
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/excluir_titulo_areceber_apagar', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da exclusão de título', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Financeiro/v3_excluir_titulo_areceber_apagar`,
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
});