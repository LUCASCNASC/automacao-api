// /v3/cliente/{cliente} - Dados do cliente
// Dados do cliente
// 204 - Sem dados de retorno
// 200 - OK
// 412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');
const cliente = ""; // string - OBRIGATÓRIO  

describe('Cliente - GET - /v3/cliente/{cliente}', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e todas as propriedades esperadas', () => {
    cy.api({
      method: 'GET',
      url: `${API_URL}/Cliente/v2_cliente_get_delete_get/${cliente}`,
      headers: { Authorization },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);

      const ret = response.body.retorno[0];
      expect(ret).to.have.property('cnpj_cpf');
      expect(ret).to.have.property('nome');
      expect(ret).to.have.property('nomefantasia');
      expect(ret).to.have.property('datacriacao');
      expect(ret).to.have.property('idtiposexo');
      expect(ret).to.have.property('idtipocontribuinte');
      expect(ret).to.have.property('faturamentoanual');
      expect(ret).to.have.property('pai');
      expect(ret).to.have.property('mae');
      expect(ret).to.have.property('nacionalidade');
      expect(ret).to.have.property('atualizarcadastro');
      expect(ret).to.have.property('idtipoestadocivil');
      expect(ret).to.have.property('idnivelformacao');
      expect(ret).to.have.property('idtipoocupacao');
      expect(ret).to.have.property('empresaatividade');
      expect(ret).to.have.property('registrojuntacomercial');
      expect(ret).to.have.property('dataregistrojuntacomercial');
      expect(ret).to.have.property('idnaturezaretencaofonte');
      expect(ret).to.have.property('contador');
      expect(ret).to.have.property('dddcontador');
      expect(ret).to.have.property('telefonecontador');
      expect(ret).to.have.property('cce_rg');
      expect(ret).to.have.property('orgaoexpedicaorg');
      expect(ret).to.have.property('dataexpedicaorg');
      expect(ret).to.have.property('numeroconselhoprofissional');
      expect(ret).to.have.property('aposentado');
      expect(ret).to.have.property('pensionista');
      expect(ret).to.have.property('numerocarteiraprofissional');
      expect(ret).to.have.property('gerarboleto');
      expect(ret).to.have.property('seriecarteiraprofissional');
      expect(ret).to.have.property('ufcarteiraprofissional');
      expect(ret).to.have.property('numerobeneficio');
      expect(ret).to.have.property('orgaobeneficio');
      expect(ret).to.have.property('numeroinscricaotrabalhador');
      expect(ret).to.have.property('numerocarteiraorgaoclasse');
      expect(ret).to.have.property('renavam');
      expect(ret).to.have.property('inscricaomunicipal');
      expect(ret.inscricaosubstitutotributario[0]).to.have.property('uf');
      expect(ret.inscricaosubstitutotributario[0]).to.have.property('inscricaosubstitutotributario');
      expect(ret.inscricaosubstitutotributario[0]).to.have.property('exclusivodifal');
      expect(ret).to.have.property('inscricaosuframa');
      expect(ret).to.have.property('idtiporesidencia');
      expect(ret).to.have.property('residentedesde');
      expect(ret).to.have.property('valoraluguel');
      expect(ret).to.have.property('maladireta');
      expect(ret).to.have.property('placaveiculo');
      expect(ret).to.have.property('veiculoquitado');
      expect(ret).to.have.property('valoroutrasrendas');
      expect(ret).to.have.property('descricaooutrasrendas');
      expect(ret).to.have.property('email');
      expect(ret).to.have.property('emailnfe');
      expect(ret).to.have.property('contato');
      expect(ret).to.have.property('observacao');
      expect(ret).to.have.property('expostapoliticamente');
      expect(ret).to.have.property('relacaoexpostapoliticamente');
      expect(ret).to.have.property('emancipado');
      expect(ret).to.have.property('linkdocumento');
      expect(ret).to.have.property('prolabore');
      expect(ret).to.have.property('observacaovenda');
      expect(ret).to.have.property('receberemailmarketing');
      expect(ret).to.have.property('verbarebate');
      expect(ret).to.have.property('cidadenaturalidade');
      expect(ret.cidadenaturalidade[0]).to.have.property('cidade_codigo');
      expect(ret.conjuge[0]).to.have.property('cnpj_cpf');
      expect(ret.cnae[0]).to.have.property('idcnae');
      expect(ret.endereco[0]).to.have.property('idtipoendereco');
      expect(ret.endereco[0]).to.have.property('cep');
      expect(ret.endereco[0]).to.have.property('endereco');
      expect(ret.endereco[0]).to.have.property('numero');
      expect(ret.endereco[0]).to.have.property('complemento');
      expect(ret.endereco[0]).to.have.property('caixapostal');
      expect(ret.endereco[0]).to.have.property('bairro');
      expect(ret.endereco[0]).to.have.property('cidade');
      expect(ret.endereco[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.telefone[0]).to.have.property('idtipotelefone');
      expect(ret.telefone[0]).to.have.property('ddd');
      expect(ret.telefone[0]).to.have.property('numero');
      expect(ret.telefone[0]).to.have.property('ramal');
      expect(ret.referencia[0].pessoal[0]).to.have.property('idreferenciapessoal');
      expect(ret.referencia[0].pessoal[0]).to.have.property('nome');
      expect(ret.referencia[0].pessoal[0]).to.have.property('ddd');
      expect(ret.referencia[0].pessoal[0]).to.have.property('telefone');
      expect(ret.referencia[0].pessoal[0]).to.have.property('graurelacionamento');
      expect(ret.referencia[0].pessoal[0]).to.have.property('email');
      expect(ret.referencia[0].pessoal[0]).to.have.property('datainclusao');
      expect(ret.referencia[0].comercial[0]).to.have.property('idreferenciacomercial');
      expect(ret.referencia[0].comercial[0]).to.have.property('empresa');
      expect(ret.referencia[0].comercial[0]).to.have.property('ddd');
      expect(ret.referencia[0].comercial[0]).to.have.property('telefone');
      expect(ret.referencia[0].comercial[0]).to.have.property('contato');
      expect(ret.referencia[0].comercial[0]).to.have.property('observacao');
      expect(ret.referencia[0].comercial[0]).to.have.property('email');
      expect(ret.referencia[0].bancaria[0]).to.have.property('idreferenciabancaria');
      expect(ret.referencia[0].bancaria[0]).to.have.property('agencia');
      expect(ret.referencia[0].bancaria[0]).to.have.property('conta');
      expect(ret.referencia[0].bancaria[0]).to.have.property('dataabertura');
      expect(ret.referencia[0].bancaria[0]).to.have.property('bancoboleto');
      expect(ret.referencia[0].bancaria[0]).to.have.property('ddd');
      expect(ret.referencia[0].bancaria[0]).to.have.property('telefone');
      expect(ret.referencia[0].bancaria[0]).to.have.property('gerente');
      expect(ret.referencia[0].bancaria[0]).to.have.property('cnpj_cpf_correntista');
      expect(ret.referencia[0].bancaria[0]).to.have.property('nomecorrentista');
      expect(ret.referencia[0].bancaria[0]).to.have.property('idtipoconta');
      expect(ret.referencia[0].bancaria[0]).to.have.property('operacaobancaria');
      expect(ret.referencia[0].bancaria[0]).to.have.property('idformapagamento');
      expect(ret.referencia[0].bancaria[0]).to.have.property('idtipochavepix');
      expect(ret.referencia[0].bancaria[0]).to.have.property('chavepix');
      expect(ret.referencia[0].bancaria[0].banco[0]).to.have.property('codigo');
      expect(ret.referencia[0].financeira[0]).to.have.property('idreferenciafinanceira');
      expect(ret.referencia[0].financeira[0]).to.have.property('inicioexperienciacredito');
      expect(ret.referencia[0].financeira[0]).to.have.property('localexperiencia');
      expect(ret.referencia[0].financeira[0]).to.have.property('planoexperiencia');
      expect(ret.referencia[0].financeira[0]).to.have.property('possuicartaofinanceira');
      expect(ret.referencia[0].financeira[0]).to.have.property('valorprestacao');
      expect(ret.empregaticio[0]).to.have.property('iddadosempregaticio');
      expect(ret.empregaticio[0]).to.have.property('empresacnpj');
      expect(ret.empregaticio[0]).to.have.property('ddd');
      expect(ret.empregaticio[0]).to.have.property('telefone');
      expect(ret.empregaticio[0]).to.have.property('empresa');
      expect(ret.empregaticio[0]).to.have.property('idramoatividade');
      expect(ret.empregaticio[0]).to.have.property('empresacep');
      expect(ret.empregaticio[0]).to.have.property('empresaendereco');
      expect(ret.empregaticio[0]).to.have.property('empresanumero');
      expect(ret.empregaticio[0]).to.have.property('empresabairro');
      expect(ret.empregaticio[0]).to.have.property('empresacomplementoendereco');
      expect(ret.empregaticio[0]).to.have.property('admissao');
      expect(ret.empregaticio[0]).to.have.property('salario');
      expect(ret.empregaticio[0]).to.have.property('dtcomprovante');
      expect(ret.empregaticio[0]).to.have.property('idtipocomprovante');
      expect(ret.empregaticio[0]).to.have.property('empresasetor');
      expect(ret.empregaticio[0]).to.have.property('empresacontato');
      expect(ret.empregaticio[0]).to.have.property('confirmadopor');
      expect(ret.empregaticio[0]).to.have.property('desligamento');
      expect(ret.empregaticio[0]).to.have.property('cargo');
      expect(ret.empregaticio[0].empresacidade[0]).to.have.property('cidade_codigo');
      expect(ret.empregaticio[0].cbo[0]).to.have.property('idcbofamilia');
      expect(ret.empregaticio[0].cbo[0]).to.have.property('idcbo');
      expect(ret.dependente[0]).to.have.property('iddependente');
      expect(ret.dependente[0]).to.have.property('nome');
      expect(ret.dependente[0]).to.have.property('datanascimento');
      expect(ret.dependente[0]).to.have.property('idgrauparentesco');
      expect(ret.dependente[0]).to.have.property('idtiposexo');
      expect(ret.dependente[0]).to.have.property('deduzirimpostoirpf');
      expect(ret.infcomplementar[0]).to.have.property('idpessoainformacoes');
      expect(ret.infcomplementar[0]).to.have.property('descricao');
      expect(ret.infcomplementar[0]).to.have.property('datamovimento');
      expect(ret.infcomplementar[0]).to.have.property('idusuario');
      expect(ret.rota[0]).to.have.property('idrota');
      expect(ret.rota[0].local_entrega[0]).to.have.property('codigo');
      expect(ret.rota[0].local_entrega[0].cidade[0]).to.have.property('cidade_codigo');
      expect(ret.rota[0].local_entrega[0].cidade[0]).to.have.property('cidade_nome');
    });
  });
});