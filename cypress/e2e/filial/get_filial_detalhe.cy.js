// /v3/filial_por_tipo/{UF}/{Municipio}/{Tipo} - Dados da Filial
// Retorna dados cadastrais da filial.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = 10050  // ID da filial a ser consultada

describe('Filial - GET - /v3/filial_detalhe/{filial}', { env: { hideCredendials: true } }, () => {

  it.only('Retorno 200', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Filial/v2_filial_detalhe/${filial}`,
      headers: { Authorization }
    }).should(({ status, body }) => {
      const { data } = body
      expect(status).to.equal(200)
      expect(resposta.body.retorno[0]).toHaveProperty('id_filial');
      expect(resposta.body.retorno[0]).toHaveProperty('id_empresa');
      expect(resposta.body.retorno[0]).toHaveProperty('numero_filial');
      expect(resposta.body.retorno[0]).toHaveProperty('nome_fantasia');
      expect(resposta.body.retorno[0]).toHaveProperty('razao_social');
      expect(resposta.body.retorno[0]).toHaveProperty('cnpj');
      expect(resposta.body.retorno[0]).toHaveProperty('cce');
      expect(resposta.body.retorno[0]).toHaveProperty('tipo_contribuinte');
      expect(resposta.body.retorno[0]).toHaveProperty('inscricao_municipal');
      expect(resposta.body.retorno[0]).toHaveProperty('inscricao_suframa');
      expect(resposta.body.retorno[0]).toHaveProperty('endereco');
      expect(resposta.body.retorno[0]).toHaveProperty('numero');
      expect(resposta.body.retorno[0]).toHaveProperty('bairro');
      expect(resposta.body.retorno[0]).toHaveProperty('complemento');
      expect(resposta.body.retorno[0]).toHaveProperty('id_cidade');
      expect(resposta.body.retorno[0]).toHaveProperty('cidade');
      expect(resposta.body.retorno[0]).toHaveProperty('uf');
      expect(resposta.body.retorno[0]).toHaveProperty('cep');
      expect(resposta.body.retorno[0]).toHaveProperty('caixa_postal');
      expect(resposta.body.retorno[0]).toHaveProperty('id_gruporota');
      expect(resposta.body.retorno[0]).toHaveProperty('id_rotacidade');
      expect(resposta.body.retorno[0]).toHaveProperty('id_ibge');
      expect(resposta.body.retorno[0].inscsubstitutotributario[0]).toHaveProperty('uf');
      expect(resposta.body.retorno[0].inscsubstitutotributario[0]).toHaveProperty('inscricao_substitutotributario');
      expect(resposta.body.retorno[0].inscsubstitutotributario[0]).toHaveProperty('exclusivodifal');

    })
  })
})