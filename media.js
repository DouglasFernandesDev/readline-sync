const alunos = [
    { nome: "Ana", nota1: 8, nota2: 7, nota3: 9 },
    { nome: "Bruno", nota1: 4, nota2: 5, nota3: 6 },
    { nome: "Carla", nota1: 3, nota2: 4, nota3:2 },
];

let mediaTotal = 0;

for(const aluno of alunos){
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    aluno.media = media
    mediaTotal += media;
}

for(const aluno of alunos) {
    if (aluno.media >= 7) {
        console.log(`${aluno.nome} Está aprovado`);
    }
    else if(aluno.media >= 5){
        console.log(`${aluno.nome} Está em recuperação`);
    }
    else{
        console.log(`${aluno.nome} Está  reprovado`);
    }
}
import entradaDados from 'readline-sync';

const nomeBuscado = entradaDados.question("Digite nome do aluno: ")

const alunoEncontrado = alunos.find(
    (aluno) => aluno.nome.toLowerCase() === nomeBuscado.toLowerCase()
);
if(alunoEncontrado){
    console.log(alunoEncontrado);
} else {
    console.log("Aluno não encontrado");
}