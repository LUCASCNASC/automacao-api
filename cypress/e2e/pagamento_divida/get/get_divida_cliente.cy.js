// /v3/divida_cliente/{filial}/{cliente} - Títulos do cliente
// lista de títulos a receber do cliente
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const filial = ""; //number - OBRIGATÓRIO
const cliente = ""; //string - OBRIGATÓRIO

describe('Pagamento divida - GET - /v3/divida_cliente/{filial}/{cliente}', { env: { hideCredendials: true } }, () => {
  const token = acess_token 
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${API_URL}/Pagamento%20divida/v2_divida_cliente/${filial}/${cliente}`, 
        headers: { Authorization },
        
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcelatitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcialtitulo');
          expect(resposta.body.retorno[0]).toHaveProperty('datavencimento');
          expect(resposta.body.retorno[0]).toHaveProperty('valor');
          expect(resposta.body.retorno[0]).toHaveProperty('valor_principal');
          expect(resposta.body.retorno[0]).toHaveProperty('idfilial_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idtitulo_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcela_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('idparcial_vinculado');
          expect(resposta.body.retorno[0]).toHaveProperty('valor_vinculado');
        });
    });
  });