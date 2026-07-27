import entradaDados from 'readline-sync';

const historico = [];
let continuar = true;

while (continuar) {
    const nome = entradaDados.question("Digite seu nome: ");
    const peso = Number(entradaDados.question("Digite seu peso (kg): "));
    const altura = Number(entradaDados.question("Digite sua altura (m): "));

    let IMC = peso / (altura * altura);

    let classificacao;

    if (IMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (IMC < 24.9) {
        classificacao = "Peso normal";
    } else if (IMC < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    const pessoa = {
        nome: nome,
        peso: peso,
        altura: altura,
        imc: IMC,
        classificacao: classificacao
    };

    historico.push(pessoa);

    const resposta = entradaDados.question("Deseja calcular outro IMC? (sim/nao) ");
    continuar = resposta.toLowerCase() === "sim";
}

console.log("\nHistórico completo:");
console.log(historico);

let contadorAbaixoDoPeso = 0;
let contadorPesoNormal = 0;
let contadorSobrepeso = 0;
let contadorObesidade = 0;

for (const pessoa of historico) {
    if (pessoa.classificacao === "Abaixo do peso") {
        contadorAbaixoDoPeso += 1;
    } else if (pessoa.classificacao === "Peso normal") {
        contadorPesoNormal += 1;
    } else if (pessoa.classificacao === "Sobrepeso") {
        contadorSobrepeso += 1;
    } else if (pessoa.classificacao === "Obesidade") {
        contadorObesidade += 1;
    }
}

console.log("\nResumo por classificação:");
console.log(`Abaixo do peso: ${contadorAbaixoDoPeso}`);
console.log(`Peso normal: ${contadorPesoNormal}`);
console.log(`Sobrepeso: ${contadorSobrepeso}`);
console.log(`Obesidade: ${contadorObesidade}`);