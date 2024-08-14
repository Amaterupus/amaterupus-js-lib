// Importações:
const isStr = require('./isStr'); const isArr = require('./isArr'); const isInt = require('./isInt');

// Nome da função:
const funName = () => `arraysWithElementInElements`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intIndexElement = 0, ...arrArraysWithElement) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna os elementos de um índice de todos os arrays passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo integer e indica o índice alvo dos arrays.
- O segundo parâmetro é obrigatório e os demais são opcionais, devem ser do tipo array e indicam os arrays com os elementos.

Exemplo de uso:
console.log(${funName()}(1, ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']));

Exemplo de retorno:
[ 'b', 'e', 'h' ]

O retorno sempre será um array de elementos.`;

const arraysWithElementInElements = (intIndexElement = 0, ...arrArraysWithElement) => {
  if (isStr(intIndexElement)) {
    intIndexElement = Number(intIndexElement);
  };
  if (arrArraysWithElement.length < 1) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O segundo parâmetro não foi passado.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return [ null ];
  };
  for (let i = 0; i < arrArraysWithElement.length; i++) {
    let arrArray = arrArraysWithElement[i];
    if (!isArr(arrArray) || arrArray.length < 1) {
      console.error(`ERRO FUNÇÃO: ${funAllName()}`);
      console.error(`ERRO: Há algum problema com o segundo parâmetro ('${arrArray}' não é do tipo array OU '${arrArray}' não possui nenhum elemento).`);
      console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
      return [ null ];
    };
    if (!isInt(intIndexElement) || isInt(intIndexElement) && intIndexElement < 0 || isInt(intIndexElement) && intIndexElement > (arrArray.length - 1)) {
      intIndexElement = 0;
    };
  };

  const ArrRetorno = [];
  for (let i = 0; i < arrArraysWithElement.length; i++) {
    let arrValor = arrArraysWithElement[i];
    ArrRetorno.push(arrValor[intIndexElement]);
  };

  return ArrRetorno;
};

arraysWithElementInElements.nome = funAllName;
arraysWithElementInElements.desc = funDesc;
arraysWithElementInElements.help = funHelp;

module.exports = arraysWithElementInElements;
