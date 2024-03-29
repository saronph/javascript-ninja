/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (param) => {
  return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(undefined);
isTruthy(false);
isTruthy('');
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);
isTruthy(null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log('teste', isTruthy('a'));
console.log('teste', isTruthy(true));
console.log('teste', isTruthy('false'));
console.log('teste', isTruthy(1));
console.log('array', isTruthy([]));
console.log('array', isTruthy({}));
console.log('array', isTruthy('any'));
console.log('array', isTruthy(1.78));
console.log('array', isTruthy(-5));
console.log('array', isTruthy(15615));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
  marca: '',
  modelo: '',
  placa: '',
  ano: 0,
  cor: '',
  quantasPortas: 0,
  assentos: 5,
  quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (cor) => {
  carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => {
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => {
  return `Esse carro é um ${carro.marca} ${carro.modelo}`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = (quantidade) => {
  if (
    carro.quantidadePessoas < 5 &&
    (carro.quantidadePessoas = +quantidade) >= 5
  ) {
    let quantVagas = 5 - carro.quantidadePessoas;
    return `Só cabem mais ${quantVagas} ${
      quantVagas === 1 ? 'pessoa' : 'pessoas'
    }!`;
  }
  if (carro.quantidadePessoas >= 5 || quantidade >= 5) {
    return `O carro já está lotado!`;
  }

  return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
};

console.log(carro.adicionarPessoas(2));
console.log(carro.adicionarPessoas(4));
console.log('pessoas no carro', carro.quantidadePessoas);

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/

// Mude a cor do carro para vermelho.

// E agora, qual a cor do carro

// Mude a cor do carro para verde musgo.

// E agora, qual a cor do carro

// Qual a marca e modelo do carro

// Adicione 2 pessoas no carro.

// Adicione mais 4 pessoas no carro.

// Faça o carro encher.

// Tire 4 pessoas do carro.

// Adicione 10 pessoas no carro.

// Quantas pessoas temos no carro
