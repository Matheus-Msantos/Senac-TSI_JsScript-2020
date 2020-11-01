let lakers = {
    nome: 'Los Angeles Lakers',
    pontos: [89, 120, 103, 100],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let golden = {
    nome: 'Golden State',
    pontos: [97, 105, 110, 99],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}

let cavaliers = {
    nome: 'Cleveland Cavaliers',
    pontos: [90, 117, 108, 89],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma += this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}


console.log(lakers.media());
console.log(golden.media());
console.log(cavaliers.media());