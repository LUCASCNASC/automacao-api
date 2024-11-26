// /v3/incluir_dados_inventario - Movimento de inventário
// Incluir dados do arquivo de importação de inventário

describe('Fisco/Contábil - POST - /v3/incluir_dados_inventario', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_inventario_incluir';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/incluir_dados_inventario - Resposta 200', () => {
      const requestBody = {
        "CNPJ_Filial": "string",
        "Codigo_Inventario_PDA": 0,
        "Data_Inventario": "string",
        "Dados_Inventario": [
          {
            "ID_Produto": 0,
            "ID_Grade_X": 0,
            "ID_Grade_Y": 0,
            "ID_Local_Saldo": 0,
            "Qtde_Saldo_Filial": 0,
            "Qtde_Saldo_Inventario": 0,
            "ID_Tipo_Divergencia": 0,
            "ID_Tipo_Inventario": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });