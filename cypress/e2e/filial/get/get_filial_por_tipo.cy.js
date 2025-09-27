// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Lista de Filial
// Retorna uma lista das filiais de acordo com os parâmetros informados
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Filial/v3_get_filial_por_tipo';
const Authorization = Cypress.env('API.PRAGMA');
const uf = 'PR'; // string
const municipio = 3317; // number
const tipo = 1; // number

describe('Filial - GET - /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades da lista de filial por tipo', () => {
    cy.api({
      method: 'GET',
      url: `${BASE_URL}/${PATH_API}/${uf}/${municipio}/${tipo}`,
      headers: { Authorization }
    }).then((response) => {
      expect(response.status).to.equal(200);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idtipofilial');
      expect(ret).to.have.property('descricao_tipofilial');
      expect(ret).to.have.property('nome_filial');
      expect(ret).to.have.property('logradouro');
      expect(ret).to.have.property('numero');
      expect(ret).to.have.property('complemento');
      expect(ret).to.have.property('bairro');
      expect(ret).to.have.property('idcidade');
      expect(ret).to.have.property('cidade');
      expect(ret).to.have.property('telefone');
      expect(ret).to.have.property('cep');
      expect(ret).to.have.property('uf');
    });
  });
});