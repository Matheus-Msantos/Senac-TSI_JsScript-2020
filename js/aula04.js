//FOR

/*
for (let i = 0; i < 9; i++) {
    console.log(i);
}
*/

//Imprimindo os valores do array
let gol = [1, 4, 2, 1];

for (let i = 0; i < gol.length; i++) {
    console.log(i, gol[i]);
}

//Somando valores de um array
let pontos = [100, 200, 150, 350];
let soma = 0;

for (let i = 0; i < pontos.length; i++) {
    soma += pontos[i];
}

console.log(soma);

//While
let i = 0;
let soma2 = 0;

while (i < pontos.length) {
    soma2 += pontos[i];

    i++;
}

console.log(soma2);

// Imprimindo valores Específicos FOR

let dados = ['Matheus', 19, 'Estudante'];

for (let i = 0; i < dados.length; i++) {
    if (typeof (dados[i]) !== 'string') continue;
    console.log(dados[i]);
}
