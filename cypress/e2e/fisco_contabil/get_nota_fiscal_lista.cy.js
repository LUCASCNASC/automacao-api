// /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF} - Lista de notas fiscais
// Retornar lista das notas fiscais consultadas

import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - GET - /v3/nota_fiscal_lista/{Filial}/{Registro_Nota}/{Data_Inicial}/{Data_Final}/{CNPJ_CPF}', () => {
  const url = '/Fisco/Contabil/v3_nota_fiscal_lista';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        Filial: "",
        Registro_Nota: "",
        Data_Inicial: "",
        Data_Final: "",
        CNPJ_CPF: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });