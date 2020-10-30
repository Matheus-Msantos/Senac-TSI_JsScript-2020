//Function

let aluno1 = 1998;
let aluno2 = 2000;
let aluno3 = 1986;

function calculaIdade(ano) {
    return 2020 - ano;
}

console.log(calculaIdade(aluno1));
////////////////////////////////////////
function anoAposentadoria(nome, sexo, ano) {
    let idade = 2020 - ano;
    let anoParaAponsentar;
    switch (sexo) {
        case ('M'):
        case ('Masculino'):
            anoParaAponsentar = 65;
            break;

        case ('F'):
        case ('Femenino'):
            anoParaAponsentar = 62;
            break;
        default:
            return console.log('Por favor informe seu sexo (M/Masculino ou F/Femenino)');

    }

    let aposentadoria = anoParaAponsentar - idade;

    if (aposentadoria > 0) {
        console.log('Olá ' + nome + ' você tem ' + idade + ' e vai se aponsentar em ' + aposentadoria + ' anos!');
    } else {
        console.log('Olá ' + nome + ' você tem ' + idade + ' e se aponsentou faz ' + aposentadoria * -1 + ' anos!');
    }

}

anoAposentadoria('professor', 'M', 1986);
anoAposentadoria('Maria', 'F', 1950);

// Arrays

let numero = new Array(10, 15, 20);

console.log(numero);
console.log(numero.length); // Mostra o tamanho do array

let profissao = ['Roberto', 'Professor', 33];

console.log(profissao);

// Inserir um valor no final do array
profissao.push('Senac')
console.log(profissao);

// Inserindo um valor no começo do array
profissao.unshift('Mr.');
console.log(profissao);

//Apagando um valor no final do array
profissao.pop();
console.log(profissao);

//Apagando um valor no começo do array
profissao.shift();
console.log(profissao);

// Objects

let thyago = new Object();
thyago.nome = 'Thyago';
thyago.sobreNome = 'Quintas';
thyago.ano = 1988;
thyago.profissao = "professor";

console.log(thyago);

let matheus = {
    nome: 'Matheus',
    sobreNome: 'Melo',
    ano: 2001,
    profissao: 'Estudante',
    hobbies: ['Cs:GO', 'Basquete', 'programar'],
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobreNome;
    },
    idade: function () {
        return 2020 - this.ano;
    }
}
console.log(matheus);
console.log(matheus.nomeCompleto());
console.log(matheus.idade());