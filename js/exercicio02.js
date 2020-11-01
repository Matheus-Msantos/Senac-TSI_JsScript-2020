let lakers = {
    nome: 'Los Angeles Lakers',
    pontos: [89, 120, 103, 100],
}

let golden = {
    nome: 'Golden State',
    pontos: [97, 105, 110, 99],
}

let cavaliers = {
    nome: 'Cleveland Cavaliers',
    pontos: [90, 117, 108, 89],

}

let nba = {
    times: [lakers, golden, cavaliers],
    calculaMedia: function () {
        for (let i = 0; i < this.times.length; i++) {
            let timeAtual = this.times[i];
            let soma = 0;
            for (let j = 0; j < timeAtual.pontos.length; j++) {
                soma += timeAtual.pontos[j];
            }
            timeAtual.media = soma / timeAtual.pontos.length;
        }
    },
    timeVencedor: function () {
        let vencedor = this.times[0];
        for (let i = 1; i < this.times.length; i++) {
            if (vencedor.media < this.times[i].media) {
                vencedor = this.times[i];
            }
        }
        console.log('O vencedor é o ' + vencedor.nome);
    }
}

nba.calculaMedia();
console.log(nba.times);
nba.timeVencedor();

