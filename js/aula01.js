/*  Formas de declarar variáveis
var nickName = 'Kuzma'; - Uma variável de escopo aberto.
let nickName2 = 'MM'; - Uma variável de escopo fechado.
*/

//Tipos de variáveis
let nickName = 'Kuzma'; //String
console.log(nickName);

let age = 19; //Number (float)
console.log(age);

let active = true; //Booleano (true or false)
console.log(active);

let indefinido = undefined; //undefined
console.log(undefined);

let nothing = null; //Nulo
console.log(nothing);

let year = 2020;
let meloYear = year - 2001;
let derikYear = year - 1986;
let rogerYear = year - 1985;

console.log('A idade do Melo é ' + meloYear + ', do Derik é ' + derikYear + ' e a idade do Roger é ' + rogerYear);

if (rogerYear > derikYear && rogerYear > meloYear) {
    console.log('O mais velho é o Roger com ' + rogerYear + ' anos');
} else if (derikYear > rogerYear && derikYear > meloYear) {
    console.log('O mais velho é o Derik com ' + derikYear + ' anos');
} else if (meloYear > derikYear && meloYear > rogerYear) {
    console.log('O mais velho é o Melo com ' + meloYear + ' anos');
}
