// /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota} - Exclusão de nota fiscal
// Excluir nota fiscal
// 204 - Sem dados de retorno
// 200 - OK

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idFilial = ""; // integer - OBRIGATÓRIO
const idRegistroNota = ""; // integer - OBRIGATÓRIO

describe('Fisco/Contábil - GET - /v3/nota_fiscal_excluir/{idFilial}/{idRegistroNota}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da exclusão de nota fiscal', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Fisco/Contabil/v3_nota_fiscal_excluir/${idFilial}/${idRegistroNota}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('ID_Filial');
      expect(ret).to.have.property('ID_Registro_Nota');
      expect(ret).to.have.property('Status');
      expect(ret).to.have.property('Atenção');
      expect(ret).to.have.property('Erros');
    });
  });
});