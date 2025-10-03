// /v3/nota_incluir/ - Inclusão de nota fiscal
// Incluir nota fiscal, estoque e títulos, com base no XML
// 200 - OK
// 201 - Criado
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Fisco/Contabil/v3_post_nota_incluir';
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/nota_incluir/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da nota fiscal incluída', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('CNPJ_Filial_Nota');
      expect(ret).to.have.property('CNPJ_CPF_Nota');
      expect(ret).to.have.property('Data_Movimento');
      expect(ret).to.have.property('Numero_Nota');
      expect(ret).to.have.property('Id_Registro_Nota');
      expect(ret).to.have.property('Id_Titulo');
      expect(ret).to.have.property('Erros');
    });
  });
});