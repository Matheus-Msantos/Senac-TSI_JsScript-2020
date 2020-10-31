let usuario = {
    nome: 'Matheus Melo',
    altura: 1.80,
    peso: 70,
    imc: function () {
        return this.peso / (this.altura * 2);
    },
    grupoDeRisco: function () {
        return this.imc() >= 30;
    }
}

console.log(usuario.imc());
console.log(usuario.grupoDeRisco());
