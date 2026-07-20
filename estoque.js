const produtos = [
    { nome: "Caderno", preco: 12.50, quantidade: 20, categoria: "Papelaria" },
    { nome: "Caneta", preco: 2.0, quantidade: 3, categoria: "Papelaria" },
    { nome: "Mochila", preco: 89.90, quantidade: 8, categoria: "Acessórios" },
    { nome: "Lapis", preco: 1.0, quantidade: 2, categoria: "Papelaria" },
    { nome: "Estojo", preco: 10.0, quantidade: 8, categoria: "Acessórios" },
];

let valorTotal = 0;

for (const produto of produtos){
    const subtotal = produto.preco * produto.quantidade;
    valorTotal += subtotal;
}
console.log('Valor total do estoque: R$ ${valorTotal.toFixed(2)}');

console.log ("Produtos com estoque baixo:");

for(const produto of produtos) {
 if (produto.quantidade < 5){
    console.log(`ATENÇÃO!! ${produto.nome} - apenas ${produto.quantidade} unidades;`);
 } 

}

import entradaDados from 'readline-sync';

const nomeBuscado = entradaDados.question("Digite o nome do produto que deseja buscar: ");

const produtoEncontrado = produtos.find ( // é usado para buscar o produto solicitado no Array
    (produto) => produto.nome.toLowerCase() === nomeBuscado.toLowerCase()
);
if(produtoEncontrado) {
    console.log(produtoEncontrado);
} else {
    console.log ("Produto não encontrado.");
}