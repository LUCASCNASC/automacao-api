// /v3/cliente_anexo/{idcnpj_cpf} - Excluir anexo
// Excluir um anexo pelo idcnpj_cpf e idpessoaanexo
//204 - Sem dados de retorno
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idcnpj_cpf = ""; //string
const idpessoaanexo = ""; //string

describe('Cliente - DELETE - /v3/cliente_anexo/{idcnpj_cpf}', { env: { hideCredendials: true } }, () => {
  const url = '/Cliente/v3_cliente_anexo_delete';
  const token = acess_token  
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Cliente/v3_cliente_anexo_delete/${idcnpj_cpf}/${idpessoaanexo}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });