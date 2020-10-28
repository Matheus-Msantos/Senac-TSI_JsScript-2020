/*
let height = prompt("Sua altura");
let weight = 70;
let calculateImc = weight / (height ** 2);
let groupRiks = calculateImc >= 30;
 
 
if (calculateImc >= 30)
    console.log('You are in the risk group!');
else
    console.log('You arent in the risk group!');
 
*/

/*
if (calculateImc >= 30){ 
    console.log('You are in the risk group!');
}else{
    console.log('You arent in the risk group!');
}
*/

/*
if (calculateImc <= 24.9){
    console.log('You are at the ideal weight!');
}else if (calculateImc <= 29.9){
    console.log('Are you overweight!');
}else{
    console.log('you are obese!');
}
*/

/*
* == (comparativo de valores)
* ===(comparativo de valores e tipo)
 
if (height == 1.90){ //true
    console.log('Sua altura é igual a do meu amigo!');
}
 
if (height === 1.90) //False
    console.log('Sua altura é igual a do meu amigo!');
else
    console.log('Sua não altura é igual a do meu amigo!');
*/

/* IF ternário
let imc = calculateImc >= 30 ? 'You are in the risk group!' : 'You arent in the risk group!'
console.log(imc);
*/

/* Switch
let profession = 'Professor';
 
switch (profession) {
    case 'Professor':
        console.log('Você está compartilhando a tela!');
        break;
    case 'Aluno':
        console.log('você está recebendo conteúdo novo!');
        break;
    default:
        console.log('Acesso negado!!');
}
*/

let yearsOld = 10;
switch (true) {
    case (yearsOld <= 19 && yearsOld >= 17):
        console.log('Você nasceu entre 2001 á 2003');
        break;
    case (yearsOld < 17 && yearsOld >= 14):
        console.log('Você nasceu entre 2004 á 2006');
        break;
    default:
        console.log('Você nasceu depois de 2006 ou antes de 2001');
}