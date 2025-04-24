//Desenha uma moldura em uma frase

const readline = require('readline-sync');
const ch = '█';

function barra(qtde){
    for(let i=0; i<qtde+4; i++){
        process.stdout.write(ch);
    }
    console.log();
} 

//-- Fora da função 
const frase = readline.question('\nDigite uma frase: ');
barra(frase.length)
console.log(`${ch} ${frase} ${ch}`)
barra(frase.length)


//Antes de criar a função:

// const readline = require('readline-sync');
// const frase = readline.question('\nDigite uma frase: ');
// const ch = '█';

// for(let i=0; i<frase.length+4; i++){
//     process.stdout.write(ch);
// }

// console.log(`\n${ch} ${frase} ${ch}`) //ou console.log('\n', ch, '', frase, '', ch)

// for(let i=0; i<frase.length+4; i++){
//     process.stdout.write(ch);
// }

