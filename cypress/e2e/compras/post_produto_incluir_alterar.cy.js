// /v3/produto_incluir_alterar - Inclui e Altera Produto
// Inclui e Altera Produto

describe('Compras - POST - /v3/produto_incluir_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Compras/v3_post_produto_incluir_alterar';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/produto_incluir_alterar - Resposta 200', () => {
      const requestBody = {
        "Codigo_Produto": 0,
        "Descricao_Produto": "string",
        "Codigo_Departamento": "string",
        "Codigo_Marca": 0,
        "Codigo_Unidade": 0,
        "Codigo_Situacao_Origem": 0,
        "Codigo_NBM": "string",
        "Tipo_Tamanho_Produto": 0,
        "Peso_Bruto": 0,
        "Peso_Liquido": 0,
        "Meses_Garantia_Fabrica": 0,
        "Possui_Montagem": true,
        "Pedir_Serial_Venda": true,
        "Controlar_Movimento_Serial": true,
        "Pedir_Numero_Celular": true,
        "Altura": 0,
        "Largura": 0,
        "Profundidade": 0,
        "Validar_IMEI": true,
        "Permitir_Entrega": true,
        "Modelo": "string",
        "Produto_Grade": [
          {
            "Codigo_Grade_X": 0,
            "Codigo_Grade_Y": 0,
            "Codigo_Setor": 0,
            "Codigo_Situacao_Produto": 0,
            "Codigo_Frabicante": "string",
            "Codigo_Barra": "string",
            "Possui_Volume": true,
            "Quantidade_Volumes": 0,
            "Codigo_Tipo_Produto": 0
          }
        ],
        "Produto_GTIN": [
          {
            "Codigo_Grade_X": 0,
            "Codigo_Grade_Y": 0,
            "Codigo_GTIN": "string",
            "GTIN_Padrao": true
          }
        ],
        "Produto_Fornecedor": [
          {
            "Codigo_Grade_X": 0,
            "Codigo_Grade_Y": 0,
            "CNPJ_Fornecedor": "string",
            "Codigo_Produto_Fornecedor": "string"
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