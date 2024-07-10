let vitorias = 101
let derrotas = 10


function calculadora(vitorias, derrotas) {
    let nivel;

    saldoVitorias = vitorias - derrotas;

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    }
    else if (saldoVitorias < 21) {
        nivel = "Bronze"
    }
    else if (saldoVitorias < 51) {
        nivel = "Prata"
    }
    else if (saldoVitorias < 81) {
        nivel = "Ouro"
    }
    else if (saldoVitorias < 91) {
        nivel = "Diamante"
    }
    else if (saldoVitorias < 101) {
        nivel = "Lendário"
    }
    else {
        nivel = "Imortal"
    }
    return nivel;
}

const nivel = calculadora(vitorias, derrotas);
console.log("O Herói tem um saldo de " + saldoVitorias +", e está no nível de " + nivel);