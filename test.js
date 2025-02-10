const notas = [8.0, 7.0, 4.0];

let soma = 0;
let i = 0;

do {
    soma += notas[i];
    i++;
} while (i < notas.length);

    for (let nota of notas) {
        console.log('Nota:', nota);
    }

const media = soma / 3;
    console.log('Assim, a média do aluno é ', media.toFixed(2));

    if (media >= 7.0) {
        console.log('Portanto, o aluno foi aprovado!');
    } else {
        console.log('Portanto, o aluno foi reprovado...')
    }