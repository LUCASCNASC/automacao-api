// /v3/pedido_venda_cancelar/ - Efetua cancelamento pedido venda
// Efetua cancelamento pedido venda total ou parcial

describe('Pedido - POST - /v3/pedido_venda_cancelar/', () => {
  const url = 'http://localhost:8091/sabium#/Pedido/v3_post_pedido_venda_cancelar';

  it('POST - /v3/pedido_venda_cancelar/ - Resposta 200', () => {
    const requestBody = {
      "Numero_Empresa": 1,
      "Numero_Filial": 50,
      "Numero_Pedido": 7446,
      "Produto_Cancelar": [
        {
          "ID_Itembase": 18051,
          "ID_Produto": 5,
          "ID_Grade_X": 0,
          "ID_Grade_Y": 0,
          "Quantidade_Cancelar": 1,
          "ID_Motivo_Devolucao": 1,
          "Observacao": "string",
          "Desmontar": false,
          "Adicao_Importacao": 0,
          "Item_Adicao_Importacao": 0,
          "Numero_Serie_Produto": [ ],
          "Numero_Serie_Kit": []
        }
      ],
      "Servico_Cancelar": [],
      "Titulo_Cancelar": [
        {
          "ID_Titulo": 13628,
          "ID_Parcela_Titulo": 1,
          "ID_Parcial_Titulo": 0,
          "Valor_Cancelar": 1852.14
        }
      ],
      "Taxa_Devolucao": [],
      "Autorizacao_Devolucao": []
    }
    // Realiza a requisição POST
    cy.request('POST', url, requestBody)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});