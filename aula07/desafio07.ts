/*
Crie um array com 5 items (tipos variados).
*/
// ?

let myArray = ['hi', 1, null, undefined, () => {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

const addItem = (newValue) => {
  myArray.push(newValue);
  return myArray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?

console.log('add', addItem([1, 's', { a: '1' }]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log(
  `O segundo elemento do segundo array é ${myArray[myArray.length - 1][1]}.`
);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log(`O primeiro array tem ${myArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log(`O segundo array tem ${myArray[myArray.length - 1].length} itens.`);
// console.log();

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
// ?

let num = 10;
while (num <= 20) {
  num % 2 === 0 && console.log(num);
  num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
// ?

// while (num >= 10 && num <= 20) {
//   num % 2 !== 0 && console.log(num);
//   num++;
// }

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
// ?

// for (num = 100; num <= 120; num++) {
//   num % 2 === 0 && console.log(num);
// }

console.log('Números ímpares entre 111 e 125:');
// ?

for (num = 111; num <= 125; num++) {
  num % 2 !== 0 && console.log(num);
}
