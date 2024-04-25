const readline = require('readline-sync');

let array = [ 
] //banco de dados fake

//peça o nome, peça o nivel do Ki, peça as habilidades.


function adicionarPersonagem(){
    let personagem = {}
    let nomePersonagem = readline.question("qual o nome: ");
    let nivelKiPersonagem = readline.question("qual o nivel de ki: ");
    let habilidadePersonagem = readline.question("quais sao as habilidade: ")

    personagem.nome = nomePersonagem
    personagem.nivelKi = nivelKiPersonagem
    personagem.habilidade = [habilidadePersonagem]

    
    personagem.batalhasconcluidas = 0
    array.push(personagem)
    //faça o readline pedindo o nome
    //faça o readline pedindo o ki
    //faça o readline pedindo as habilidades

    //aqui voce dá push deste objeto no array
}

function treinamento(guerreiro){

    let treinaki = Math.floor(Math.random()*10)+10
   let  guerreiroT = {
        ...guerreiro,
        nivelKi:guerreiro.nivelKi +treinaki
    }
    guerreiro = (guerreiroT)
}


console.log(array)
function adicionarhabilidade() {
    let novaHabilidade = readline.question("Digite uma nova habilidade: ");
    array.push({ nome: novaHabilidade});
    
}



/*
function adicionarPersonagem() {
    let nomePersonagem01 = readline.question("Digite o nome do personagem novo 01: ");
    let nomePersonagem02 = readline.question("Digite o nome do novo personagem 02: ");
    let nomePersonagem03 = readline.question("Digite o nome do personagem novo 03: ")
    let niveldeKI01 = readline.question("Digite o KI do personagem 01: ")
    let niveldeKI02 = readline.question("Digite o nível de KI do personagem 02: ")
    let niveldeKI03 = readline.question("Digite o nível de KI do personagem 03: ")
    let habilidades01 = readline.question("Digite a habilidade do personagem 01: ")
    let habilidades02 = readline.question("Digite a habilidade do personagem 02: ")
    let habilidades03 = readline.question("Digite a habilidade do personagem 03: ")
    let missoesconcluidas01 = readline.question("Digite o numero de batalhas que o personagem 01 concluiu: ")
    let missoesconcluidas02 = readline.question("Digite o numero de batalhas que o personagem 02 concluiu: ")
    let missoesconcluidas03 = readline.question("Digite o numero de batalhas que o personagem 03 concluiu: ") 
    let aumentodeKI01 = readline.question("aumente o KI do goku: ")
    let aumentodeKI02 = readline.question("aumente o KI do vegeta: ")
    let aumentodeKI03 = readline.question("aumente o KI do gohan: ")
    let adicionarhabilidade01 = readline.question("adicione uma habilidade ao arsenal de goku: ")
    let adicionarhabilidade02 = readline.question("adicione uma habilidade ao arsenal de vegeta: ")
    let adicionarhabilidade03 = readline.question("adicione uma habilidade ao arsenal de gohan: ")


array.push({nome: nomePersonagem01,nomePersonagem02,nomePersonagem03, KI: niveldeKI01, niveldeKI02, niveldeKI03, habilidades: habilidades01, habilidades02, habilidades03, habilidades: missoesconcluidas01, missoesconcluidas02, missoesconcluidas03, aumentoKI: aumentodeKI01, aumentodeKI02, aumentodeKI03, adicionarhabilidade01, adicionarhabilidade02, adicionarhabilidade03});

}
*/

adicionarPersonagem()
adicionarPersonagem()
adicionarPersonagem()
treinamento(array[0])
console.log(array)




const guerreiro = {
nome: 'goku',
nivelKi:20,
habilidade:'kamekameha',
batalhas: 5
}

const guerreiro2 ={
    nome: 'vegeta',
    nivelKi:15,
    habilidade:'ego superior',
    batalhas: 4 
}
const guerreiro3 = {
nome:'gohan' ,
nivelKi:10,
habilidade:'ser pai',
batalhas: 3
}

function treinamento(){
let treinaki =Math.floor(Math.random()*15)+5
return treinaki
}

console.log(array)








