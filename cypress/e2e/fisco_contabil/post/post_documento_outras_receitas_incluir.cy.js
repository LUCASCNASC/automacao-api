// /v3/documento_outras_receitas_incluir - Inclusão de documento (outras receitas)
// Incluir documento de outras receitas
// 200 - OK

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/documento_outras_receitas_incluir', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do documento de outras receitas incluído', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_post_documento_outras_receitas_incluir`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('Status_Retorno');
      expect(ret).to.have.property('CNPJ_Filial');
      expect(ret).to.have.property('Numero_Documento_Diverso');
      expect(ret).to.have.property('Numero_Registro_Nota');
      expect(ret).to.have.property('Numero_Titulo');
      expect(ret).to.have.property('Numero_Lancamento_Conta_Corrrente');
      expect(ret).to.have.property('Erros');
    });
  });
});