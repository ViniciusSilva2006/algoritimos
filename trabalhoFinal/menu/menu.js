function exibirMenu() {
    console.log("menu de opções: ");
    console.log("1 - opção 1");
    console.log("2 - opção 2");
    console.log("3 - opção 3");
    console.log("4. Sair");
}

const readlineSync = require('readline-sync')

function processarEscolha(opcao) {
    switch(opcao) {
        case '1': 
        console.log("Você escolheu a opção 1: ");
        break;
    case '2':
        console.log("Você escolheu a opção 2: ");
        break;
    case '3': 
        console.log("Você escolheu a opção 3: ")
        break
    case '4':
        console.log("opção inválida, por favor, escolha uma opção válida"); 
    }

    return false; 

    if 
   
}

function main() {
    let encerrar = false;


    while (!encerrar) {
        exibirMenu()
        let opcao = readlineSync.question("Digite um numero da opção desejada"); 
        encerrar = processarEscolha(opcao);
    
    }


}





main();




