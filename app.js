alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual a numero do chute.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número ente 1 e 10');
    // Se chute for igual ao numero secreto.
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); //Template string
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Tentativas = tentativas + 1;
        tentativas++;
    }
}
if (tentativas > 1) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}

