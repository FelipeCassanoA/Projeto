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
}

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
        this.clientes = []
        this.animais = []
        this.funcionario = []
        this.consultas = []

    }
    
    
    Ver_meus_dados() {
        console.log('Meus dados:')
        console.log('ID: $(this.funcionario.id)')
        console.log('Meus dados:')
        console.log('Meus dados:')


    }

    Modificar_meus_dados() {



    }

}



//loop main
let opcao

while (true) {
    
    console.log('---Funcionário não logado---')
    console.log('1.Fazer login')
    console.log('2.Fazer cadastro ')
    console.log('3.Sair do programa')
    
    const opcao = prompt('Digite uma opção: ')

    if (opcao == '1'){
        fazerLogin();
    }
    
    if (opcao == '2'){
        fazerCadastro();
    }

    if (opcao == '3'){
        console.log('Programa encerrado com sucesso')
        break
    }

    else{
        console.log('Opção inválida. Digite um numero de 1 a 3.')

    }


}




function fazerLogin() {
    const usuario = prompt("Digite o usuário:");
    const senha = prompt("Digite a senha:");
  
    // Verificar se o funcionário está cadastrado
    const funcionario = funcionariosCadastrados.find(
      (f) => f.usuario === usuario && f.senha === senha
    );
  
    if (funcionario) {
      console.log("Login realizado com sucesso!");
  
      // Chamar a função para exibir o menu do funcionário logado
      exibirMenuFuncionario(funcionario);
    } else {
      console.log("Usuário ou senha incorretos.");
    }
  }


function fazerCadastro() {
    const usuario = prompt("Digite um usuário:");
    const senha = prompt("Digite uma senha:");
  
    // Gerar um ID único para o funcionário
    const id = funcionariosCadastrados.length + 1;
  
    // Criar uma instância da classe Funcionario
    const novoFuncionario = new Funcionario(id, usuario, senha);
  
    // Adicionar o novo funcionário ao array de funcionários cadastrados
    funcionariosCadastrados.push(novoFuncionario);
  
    console.log("Cadastro realizado com sucesso!");
    novoFuncionario.apresentarFuncionario();
  }

