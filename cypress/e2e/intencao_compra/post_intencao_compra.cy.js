// /v3/intencao_compra - Intenção compra
// Incluir intenção de compra

describe('Intenção compra - POST - /v3/intencao_compra', () => {
    const url = 'http://localhost:8091/sabium#/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post2';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/intencao_compra - Resposta 200', () => {
      const requestBody = {
        "cliente_idcnpj_cpf": 0,
        "motivo_codigo": "1 para Saldo indisponível, 2 para Preço e 3 para Condição de pagamento",
        "nome": "string",
        "email": "string",
        "telefone": "string",
        "observacao": "string",
        "produtos": [
          {
            "codigo": "string",
            "valor": 0
          }
        ],
        "servicos": [
          {
            "codigo": "string",
            "valor": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });