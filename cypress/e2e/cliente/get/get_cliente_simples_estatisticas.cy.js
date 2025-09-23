// /v3/cliente_simples_estatisticas/{idpessoa} - Dados do cliente
// Estatísticas do cliente simplificado
// 204 - Sem dados de retorno
// 200 - OK
// 401 - Sem permissão para acessar este recurso
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const idpessoa = ""; // string - OBRIGATÓRIO

describe('Cliente - GET - /v3/cliente_simples_estatisticas/{idpessoa}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e todas as propriedades de estatísticas do cliente simplificado', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Cliente/v2_cliente_simples_estatisticas/${idpessoa}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);

      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('data_ultima_compra');
      expect(ret).to.have.property('ticket_medio');
      expect(ret).to.have.property('media_atraso');
      expect(ret).to.have.property('total_em_aberto');
      expect(ret).to.have.property('numero_vezes');
      expect(ret).to.have.property('formas_pagamento_mais_usadas');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('idtipocarteiratitulo');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('descricao');
      expect(ret.formas_pagamento_mais_usadas[0]).to.have.property('percentual');
      expect(ret).to.have.property('ultimas_compras');
      expect(ret.ultimas_compras[0]).to.have.property('data_compra');
      expect(ret.ultimas_compras[0]).to.have.property('codigo_produto');
      expect(ret.ultimas_compras[0]).to.have.property('descricao_produto');
      expect(ret.ultimas_compras[0]).to.have.property('quantidade');
      expect(ret).to.have.property('cartao_fidelidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('idtipocartaofidelidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('descricao');
      expect(ret.cartao_fidelidade[0]).to.have.property('numerocartao');
      expect(ret.cartao_fidelidade[0]).to.have.property('diapagamento');
      expect(ret.cartao_fidelidade[0]).to.have.property('diascarencia');
      expect(ret.cartao_fidelidade[0]).to.have.property('emitecartao');
      expect(ret.cartao_fidelidade[0]).to.have.property('dataemissao');
      expect(ret.cartao_fidelidade[0]).to.have.property('dataentrega');
      expect(ret.cartao_fidelidade[0]).to.have.property('datavalidade');
      expect(ret.cartao_fidelidade[0]).to.have.property('datacontato');
      expect(ret).to.have.property('titulo_renegociado');
      expect(ret).to.have.property('limite_credito');
      expect(ret).to.have.property('disponivel');
      expect(ret).to.have.property('receber_em_aberto');
      expect(ret).to.have.property('titulo_em_atraso');
      expect(ret).to.have.property('pedidos_nao_faturados');
      expect(ret).to.have.property('titulos_transf_pendente');
      expect(ret).to.have.property('titulos_pre_pago');
      expect(ret).to.have.property('titulos_abertos');
    });
  });
});