// /v3/cliente_simples/{cliente} - Dados do cliente
// Dados do cliente simplificado
//204 - Sem dados de retorno
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const cliente = ""; //string - OBRIGATÓRIO  

describe('Cliente - GET - /v3/cliente_simples/{cliente}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Cliente/v2_cliente_simples_get/${cliente}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idcnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('nomefantasia');
          expect(resposta.body.retorno[0]).toHaveProperty('data_criacao');
          expect(resposta.body.retorno[0]).toHaveProperty('cce_rg');
          expect(resposta.body.retorno[0]).toHaveProperty('orgao_emissor');
          expect(resposta.body.retorno[0]).toHaveProperty('data_emissao');
          expect(resposta.body.retorno[0]).toHaveProperty('email');
          expect(resposta.body.retorno[0]).toHaveProperty('emailnfe');
          expect(resposta.body.retorno[0]).toHaveProperty('telefone_ddd');
          expect(resposta.body.retorno[0]).toHaveProperty('telefone_numero');
          expect(resposta.body.retorno[0]).toHaveProperty('celular_ddd');
          expect(resposta.body.retorno[0]).toHaveProperty('celular_numero');
          expect(resposta.body.retorno[0]).toHaveProperty('endereco');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('rua');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('numero');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('complemento');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('bairro');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cep');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('idtipoendereco');
          expect(resposta.body.retorno[0].endereco[0]).toHaveProperty('cidade');
          expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].endereco[0].cidade[0]).toHaveProperty('string');
          expect(resposta.body.retorno[0]).toHaveProperty('rota');
          expect(resposta.body.retorno[0].rota[0]).toHaveProperty('idrota');
          expect(resposta.body.retorno[0].rota[0]).toHaveProperty('local_entrega');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('codigo');
          expect(resposta.body.retorno[0].local_entrega[0]).toHaveProperty('cidade');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0].local_entrega[0].cidade[0]).toHaveProperty('cidade_nome');
          expect(resposta.body.retorno[0]).toHaveProperty('fiador');
          expect(resposta.body.retorno[0].fiador[0]).toHaveProperty('idcnpj_cpf');
          expect(resposta.body.retorno[0].fiador[0]).toHaveProperty('cnpj_cpf');
          expect(resposta.body.retorno[0].fiador[0]).toHaveProperty('nome');
          expect(resposta.body.retorno[0]).toHaveProperty('cartaofidelidade');
          expect(resposta.body.retorno[0].cartaofidelidade[0]).toHaveProperty('numerocarcao');
          expect(resposta.body.retorno[0].cartaofidelidade[0]).toHaveProperty('datavalidade');
          expect(resposta.body.retorno[0].cartaofidelidade[0]).toHaveProperty('tipocartao');
        });
    });
  });