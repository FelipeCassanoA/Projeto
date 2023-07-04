const prompt = require ("prompt-sync") ({ sigint : true})

class Cliente 
{
    constructor(ID_unico, nome_Cliente, pets, fidelizado)
    {
    
    this.ID_unico = ID_unico;
    this.nome_Cliente = nome_Cliente;
    this.pets = pets;
    this.fidelizado = fidelizado;
  } 
  apresentarCliente() {
    console.log('--- Dados do Cliente ---');
    console.log(`ID: ${this.ID_unico}`);
    console.log(`Nome do Cliente: ${this.nome_Cliente}`);
    console.log(`Nome do Pet: ${this.pets}`);
    console.log(`Fidelizado: ${this.fidelizado ? 'Sim' : 'Não'}`);
    console.log('------------------------');
  }



}

const funcionariosCadastrados = [];

class Funcionario 
{   
    constructor(ID_unico, usuario, senha)
    {
    this.ID_unico = ID_unico;
    this.usuario = usuario;
    this.senha = senha;
    }

    apresentarFuncionario() 
    {
        console.log(`ID: ${this.ID_unico}`);
        console.log(`Usuário: ${this.usuario}`);
        console.log(`Senha: ${this.senha}`);
    
    }
    

}

class Animal
{
   constructor(ID_unico, nome_pet, dono, consultas)
   {
    this.ID_unico = ID_unico;
    this.nome_pet = nome_pet
    this.dono = dono;
    this.consultas = consultas;

   }


}

class Consultas
{
    constructor(ID_unico, nome_Cliente, pet, funcionario, status, data)
    {
        this.ID_unico = ID_unico;
        this.nome_Cliente = nome_Cliente
        this.pet = pet;
        this.funcionario= funcionario;
        this.status = status
        this.data = data

    }

}

class Sistema 
{
    constructor()
    {   
        this.clientes = [];
        this.animais = [];
        this.funcionario = [];
        this.consultas = [];
        this.funcionarioLogado = null;
    }
      
    verDadosFuncionarioLogado() { // 1
     console.log('---Meus dados---');
     this.funcionarioLogado.apresentarFuncionario();
    }


    modificarDadosFuncionarioLogado() { //2
      if (this.funcionarioLogado) {
        console.log('--- Modificar Dados ---');
        console.log('1. Modificar nome de usuário');
        console.log('2. Modificar senha');
        console.log('3. Voltar ao menu principal');
    
        const opcao = prompt('Digite uma opção: ');
    
        switch (opcao) {
          case '1':
            const novoUsuario = prompt('Digite o novo nome de usuário: ');
            this.funcionarioLogado.usuario = novoUsuario;
            console.log('Nome de usuário modificado com sucesso!');
            this.modificarDadosFuncionarioLogado();
            break;
    
          case '2':
            const novaSenha = prompt('Digite a nova senha: ');
            this.funcionarioLogado.senha = novaSenha;
            console.log('Senha modificada com sucesso!');
            this.modificarDadosFuncionarioLogado();
            break;
    
          case '3':
            exibirMenuFuncionario();
            Funcionario_logado();
            break;
    
          default:
            console.log('Opção inválida. Tente novamente.');
            this.modificarDadosFuncionarioLogado();
            break;
    
  
        
         
        }
        } 
    }
  
    adicionarCliente() { // 3
        const nomeCliente = prompt('Digite o nome do cliente: ');
        const nomePet = prompt('Digite o nome do pet: ');
    
        const IDUnicoCliente = this.clientes.length + 1;
        const novoCliente = new Cliente(IDUnicoCliente, nomeCliente, nomePet, false);
    
        this.clientes.push(novoCliente);
    
        console.log('Cliente adicionado com sucesso!');
        novoCliente.apresentarCliente();
    }
    
    verListaClientes() { // 4
      if (this.clientes.length === 0) {
        console.log('Não há clientes cadastrados.');
      } else {
        console.log('--- Lista de Clientes ---');
        for (const cliente of this.clientes) {
          console.log(`ID: ${cliente.ID_unico}`);
          console.log(`Nome do Cliente: ${cliente.nome_Cliente}`);
          console.log(`Nome do Pet: ${cliente.pets}`);
          console.log('------------------------');
        }
      }
    }


    listarPets() { //5

      const clientesCopia = [...this.clientes];
    
      clientesCopia.sort((a, b) => a.pets.localeCompare(b.pets));
    
      console.log('Lista de Pets:');
      clientesCopia.forEach((cliente) => {
        console.log(`- Pet: ${cliente.pets} (Dono: ${cliente.nome_Cliente})`);
      });
    }
       

 
    verListaConsultas() { //6
      
      const consultasOrdenadas = this.consultas.sort((a, b) => a.data - b.data);
      
      console.log('--- Lista de Consultas ---');
      for (const consulta of this.consultas) {
        console.log(`ID da Consulta: ${consulta.ID_unico}`);
        console.log(`Nome do Cliente: ${consulta.nome_Cliente}`);
        console.log(`Pet: ${consulta.pet}`);
        console.log(`Funcionário: ${consulta.funcionario}`);
        console.log(`Status: ${consulta.status}`);
        console.log(`Data: ${consulta.data}`);
        console.log('-------------------------');
      
      }
    }

    verListaFuncionarios() { // 7
    
      const listaFuncionarios = [...this.funcionario];
  
      listaFuncionarios.sort((a, b) => a.nomeFuncionario.localeCompare(b.nomeFuncionario));
  
      listaFuncionarios.forEach((funcionario) => {
        const { nomeFuncionario, cargo } = funcionario;
        console.log(`Nome: ${nomeFuncionario}, Cargo: ${cargo}`);
      });
    }


    marcarConsulta() { //8
      const nomeCliente = prompt('Digite o nome do cliente: ');
      const dataConsulta = prompt('Digite a data da consulta: ');
    
      const cliente = this.clientes.find(cliente => cliente.nomeCliente === nomeCliente);
      if (!cliente) {
        console.log('Cliente não encontrado.');
        return;
      }
    
      const consultaExistente = cliente.consultas.find(consulta => consulta.data === dataConsulta);
      if (consultaExistente) {
        console.log('Já existe uma consulta marcada para esta data.');
    
        const remarcar = prompt('Deseja remarcar a consulta? (S/N)');
        if (remarcar.toLowerCase() === 's') {
          consultaExistente.data = prompt('Digite a nova data da consulta: ');
          console.log('Consulta remarcada com sucesso.');
        } else {
          console.log('Consulta não remarcada.');
        }
      } else {
       
        const novaConsulta = { data: dataConsulta };
        cliente.consultas.push(novaConsulta);
        console.log('Consulta marcada com sucesso.');
      }
    }
    


    removerCliente() {
      const nomeCliente = prompt('Digite o nome do cliente que deseja remover: ');
    
      const indiceCliente = this.clientes.findIndex(cliente => cliente.nome_Cliente === nomeCliente);
    
      if (indiceCliente === -1) {
        console.log('Cliente não encontrado.');
        return;
      }
    
      this.clientes.splice(indiceCliente, 1);
    
      console.log('Cliente removido com sucesso.');
    }
    

    removerFuncionarioPorNome() {
      const nomeFuncionario = prompt('Digite o nome do funcionário a ser removido:');
    
      const index = this.funcionario.findIndex(funcionario => funcionario.nome === nomeFuncionario);
    
      if (index === -1) {
        console.log('Funcionário não encontrado.');
        return;
      }
    
      this.funcionario.splice(index, 1);
      console.log('Funcionário removido com sucesso!');  
  
    }


    removerPet() {
      const nomeCliente = prompt('Digite o nome do cliente: ');
      const nomePet = prompt('Digite o nome do pet: ');
    
      const cliente = this.clientes.find((cli) => cli.nome_Cliente === nomeCliente);
    
      if (cliente) {
       
        const petsArray = cliente.pets.split(',');
    
        const petIndex = petsArray.findIndex((pet) => pet.trim() === nomePet);
    
        if (petIndex !== -1) {
          petsArray.splice(petIndex, 1);
    
          cliente.pets = petsArray.join(', ');
    
          console.log(`Pet '${nomePet}' removido com sucesso do cliente '${nomeCliente}'.`);
        } else {
          console.log(`O cliente '${nomeCliente}' não possui um pet com o nome '${nomePet}'.`);
        }
      } else {
        console.log(`Não foi encontrado um cliente com o nome '${nomeCliente}'.`);
      }
    }


  fazerLogout() { // 14
  this.funcionarioLogado = null;
  console.log('Logout realizado com sucesso!');
    }



}



const sistema = new Sistema();

//Função principal:


function Main() {
    while (true) {
    
    console.log('---Funcionário não logado---')
    console.log('1.Fazer login')
    console.log('2.Fazer cadastro ')
    console.log('3.Sair do programa')
    
    const opcao = prompt('Digite uma opção: ')

    if (opcao == '1'){
        fazerLogin();
    }
    
    else if (opcao == '2'){
        fazerCadastro();
    }

    else if (opcao == '3'){
        console.log('Programa encerrado com sucesso!')
        break
    }
    else {
        console.log('Opção inválida. Digite um número de 1 a 3.')
        
    }   
    
      
}

}


function fazerLogin() {
    const usuario = prompt("Digite o nome usuário: ");
    const senha = prompt("Digite a senha: ");
  
    // Verificar se o funcionário está cadastrado;
    const funcionario = funcionariosCadastrados.find(
      (f) => f.usuario === usuario && f.senha === senha
    );
  
    if (funcionario) {
      console.log("Login realizado com sucesso!");
  
     sistema.funcionarioLogado = funcionario;
      // Chamar a função para exibir o menu do funcionário logado;
      
      exibirMenuFuncionario();
      Funcionario_logado();
    
    } else {
      console.log("Usuário ou senha incorretos.");
    
   
    }
  }


function fazerCadastro() {
  
    const usuario = prompt("Digite um nome de usuário: ");
    const senha = prompt("Digite uma senha: ");
     
        

    // Gerar um ID único para o funcionário;

    const ID_unico = funcionariosCadastrados.length + 1;
  
  
    const novoFuncionario = new Funcionario(ID_unico, usuario, senha);
  
    funcionariosCadastrados.push(novoFuncionario);
  
    console.log("Cadastro realizado com sucesso!");
    novoFuncionario.apresentarFuncionario();
 

}
  

//TODAS AS FUNÇÕES DO FUNCIONÁRIO_LOGADO ESTÃO NA CLASSE DE SISTEMAS;

function Funcionario_logado() {

    
    const opcao = prompt('Digite uma opção: ');
    switch(opcao){
        case '1': // EXIBIR MEUS DADOS > OK
          sistema.verDadosFuncionarioLogado();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;
        
        case '2': // MODIFICAR DADOS  > OK
          sistema.modificarDadosFuncionarioLogado()
          exibirMenuFuncionario();
          Funcionario_logado;
          break;
        
        case '3': //ADICIONAR CLIENTES > OK
          sistema.adicionarCliente();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '4': // VER LISTA DE CLIENTES > OK
          sistema.verListaClientes();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '5': // VER LISTA DE PETS > OK
          sistema.listarPets();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '6': //VER LISTA CONSULTAS
          sistema.verListaConsultas();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '7': // VER LISTA FUNCIONARIOS 
          sistema.verListaFuncionarios();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '8': // MARCAR CONSULTA
          sistema.marcarConsulta();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '9': // MUDAR STATUS DE CONSULTA
          console.log('Opção não implementada.');
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '10': // REMOVER CLIENTE > OK
          sistema.removerCliente();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '11': // REMOVER PET (Bug a consertar)
          sistema.removerPet();
          exibirMenuFuncionario();
          Funcionario_logado();
          break;

        case '12': // CANCELAR CONSULTA 
          console.log('Opção não implementada.')
          break

        case '13': // REMOVER FUNCIONARIO 
          sistema.removerFuncionarioPorNome();
          exibirMenuFuncionario();
          Funcionario_logado();         
          break;

        case'14': // FAZER LOGOUT > OK
          sistema.fazerLogout();
          Main();
          break

        default:
          console.log('Opção inválida. Tente novamente.');
          Funcionario_logado();
          
        
    
    }      
        }
    
  
function exibirMenuFuncionario(){
  console.log('---Funcionário Logado---');
  console.log('1. Ver meus dados');
  console.log('2. Modificar meus dados');
  console.log('3. Adicionar Cliente');
  console.log('4. Ver lista de Clientes');
  console.log('5. Ver lista de Pets');
  console.log('6. Ver lista de Consultas');
  console.log('7. Ver lista de Funcionários');
  console.log('8. Marcar Consulta');
  console.log('9. Mudar Status de Consulta');
  console.log('10. Remover Cliente');
  console.log('11. Remover Pet');
  console.log('12. Cancelar Consulta');
  console.log('13. Remover Funcionário');
  console.log('14. Fazer Logout');

}

// AO CLICAR O '3' PRA SAIR, A FUNÇÃO PEDE NOVAMENTE. (BUG A CONSERTAR);
Main();

