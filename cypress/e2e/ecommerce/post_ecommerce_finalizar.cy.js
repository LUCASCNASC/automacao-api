const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/E-commerce/v3_ecommerce_finalizar';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - E-commerce - POST /v3/ecommerce_finalizar', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 200 ao finalizar pedido e-commerce válido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário com os campos obrigatórios do seu endpoint
        cliente: "12345678901",
        produtos: [
          {
            codigo: "P001",
            quantidade: 2,
            valor_unitario: 100.00
          }
        ],
        pagamento: {
          forma: "cartao",
          valor: 200.00
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      // Exemplo de asserção para campos de retorno (ajuste conforme a resposta real)
      // const ret = response.body.retorno[0];
      // expect(ret).to.have.property('idPedido');
      // expect(ret).to.have.property('status');
    });
  });

  it('Deve retornar 412 ao tentar finalizar pedido e-commerce com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido (faltando campos obrigatórios)
        cliente: "",
        produtos: [],
        pagamento: {}
      }
    }).then((response) => {
      expect(response.status).to.eq(412);
      expect(response.body).to.exist;
    });
  });
});