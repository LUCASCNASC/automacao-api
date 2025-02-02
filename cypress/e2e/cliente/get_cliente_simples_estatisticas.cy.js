// /v3/cliente_simples_estatisticas/{idpessoa} - Dados do cliente
// Estatísticas do cliente simplificado
//204 - Sem dados de retorno
//200 - OK
//401 - Sem permissão para acessar este recurso
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idpessoa = ""; //string - OBRIGATÓRIO 

describe('Cliente - GET - /v3/cliente_simples_estatisticas/{idpessoa}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Cliente/v2_cliente_simples_estatisticas/${idpessoa}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('data_ultima_compra');
          expect(resposta.body.retorno[0]).toHaveProperty('ticket_medio');
          expect(resposta.body.retorno[0]).toHaveProperty('media_atraso');
          expect(resposta.body.retorno[0]).toHaveProperty('total_em_aberto');
          expect(resposta.body.retorno[0]).toHaveProperty('numero_vezes');
          expect(resposta.body.retorno[0]).toHaveProperty('formas_pagamento_mais_usadas');
          expect(resposta.body.retorno[0].formas_pagamento_mais_usadas[0]).toHaveProperty('idtipocarteiratitulo');
          expect(resposta.body.retorno[0].formas_pagamento_mais_usadas[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].formas_pagamento_mais_usadas[0]).toHaveProperty('percentual');
          expect(resposta.body.retorno[0]).toHaveProperty('ultimas_compras');
          expect(resposta.body.retorno[0].ultimas_compras[0]).toHaveProperty('data_compra');
          expect(resposta.body.retorno[0].ultimas_compras[0]).toHaveProperty('codigo_produto');
          expect(resposta.body.retorno[0].ultimas_compras[0]).toHaveProperty('descricao_produto');
          expect(resposta.body.retorno[0].ultimas_compras[0]).toHaveProperty('quantidade');
          expect(resposta.body.retorno[0]).toHaveProperty('cartao_fidelidade');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('idtipocartaofidelidade');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('descricao');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('numerocartao');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('diapagamento');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('diascarencia');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('emitecartao');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('dataemissao');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('dataentrega');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('datavalidade');
          expect(resposta.body.retorno[0].cartao_fidelidade[0]).toHaveProperty('datacontato');
          expect(resposta.body.retorno[0]).toHaveProperty('titulo_renegociado');
          expect(resposta.body.retorno[0]).toHaveProperty('limite_credito');
          expect(resposta.body.retorno[0]).toHaveProperty('disponivel');
          expect(resposta.body.retorno[0]).toHaveProperty('receber_em_aberto');
          expect(resposta.body.retorno[0]).toHaveProperty('titulo_em_atraso');
          expect(resposta.body.retorno[0]).toHaveProperty('pedidos_nao_faturados');
          expect(resposta.body.retorno[0]).toHaveProperty('titulos_transf_pendente');
          expect(resposta.body.retorno[0]).toHaveProperty('titulos_pre_pago');
          expect(resposta.body.retorno[0]).toHaveProperty('titulos_abertos');
        });
    });
  });