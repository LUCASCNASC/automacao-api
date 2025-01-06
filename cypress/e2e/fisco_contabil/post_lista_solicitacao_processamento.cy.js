// /v3/lista_solicitacao_processamento - Solicitação de processamento
// Retornar lista com as solicitações de processamento

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')


describe('Fisco/Contábil - POST - /v3/lista_solicitacao_processamento', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('ID_Filial');
          expect(response.body.retorno[0]).toHaveProperty('ID_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Data_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Tipo_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Situacao_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Data_Agendamento');
          expect(response.body.retorno[0]).toHaveProperty('Inicio_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Fim_Processamento');
          expect(response.body.retorno[0]).toHaveProperty('Mensagem_Falha');
        });
    });
  });