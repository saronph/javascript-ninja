/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
let myArray = ['algo', 1, null, undefined, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

let myFunc = (arg) => {
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

// console.log(myFunc(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

let secondFunc = (arg1, arg2) => {
  return arg1[arg2];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

let myArray2 = [
  'algo',
  1,
  null,
  undefined,
  () => {
    return 1;
  },
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

// console.log(secondFunc(myArray2, 0));
// console.log(secondFunc(myArray2, 1));
// console.log(secondFunc(myArray2, 2));
// console.log(secondFunc(myArray2, 3));
console.log(secondFunc(myArray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

let book = (arg) => {
  let bookData = {
    LOTR: {
      quantidadePaginas: 300,
      autor: 'Tolkien',
      editora: 'Alguma tolkien',
    },
    PRPP: {
      quantidadePaginas: 250,
      autor: 'Kiosaky',
      editora: 'Da grana',
    },
    Axiomas: {
      quantidadePaginas: 200,
      autor: 'Gutler',
      editora: 'Zurique',
    },
  };

  // return !!arg ? bookData[arg] : bookData;
  return `O livro ${arg} tem ${bookData[arg].quantidadePaginas} páginas`;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

// console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log(book('Axiomas'));

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log(book('Axiomas'));

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
