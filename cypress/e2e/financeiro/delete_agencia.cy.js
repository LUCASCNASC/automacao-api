// /v3/agencia/{codigoBanco}/{codigoAgencia} - Exclusão de agência
// Excluir agência pelo código do banco e agência

describe('Financeiro - DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_agencia_delete';
  
    it('DELETE - /v3/agencia/{codigoBanco}/{codigoAgencia} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });