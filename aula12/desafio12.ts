(() => {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  var person = {
    name: 'Saron',
    lastName: 'Philippi',
    age: 34,
  };
  console.log('Propriedades de "person":', person);

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  console.log(Object.keys(person));

  /*
Crie um array vazio chamado `books`.
*/
  var books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push(
    { name: 'Segredos do JS', pages: 464 },
    { name: 'Pai rico, pai pobre', pages: 336 },
    { name: 'O homem mais rico da babilonia', pages: 160 }
  );

  /*
  Mostre no console todos os livros.
  */
  console.log('\nLista de livros:', books);
  /*
  Remova o último livro, e mostre-o no console.
  */

  console.log('\nLivro que está sendo removido:', books.pop());
  // ?

  /*
  Mostre no console os livros restantes.
  */
  console.log('\nAgora sobraram somente os livros:', books);
  // ?

  /*
Converta os objetos que ficaram em `books` para strings.
*/

  console.log('\nLivros em formato string:', JSON.stringify(books));

  /*
Mostre os livros nesse formato no console:
*/

  /*
Converta os livros novamente para objeto.
*/
  // ?
  console.log('\nAgora os livros são objetos novamente:', books);

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

  for (var i = 0; i < books.length; i++) {
    for (var props in books[i]) {
      console.log(`${props}: ${books[i][props]}`);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  var myName = ['S', 'a', 'r', 'o', 'n'];
  console.log('\nMeu nome é:', myName.join(''));

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  // ?

  console.log('\nMeu nome invertido é:', myName.reverse().join(''));

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  // ?

  console.log('\nAgora em ordem alfabética:', myName.sort().join(''));
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  // ?
})();
