// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt'); const toFixed = require('./toFixed');

// Nome da função:
const funName = () => `numberForFormRealMoney`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (numNumber, intDecimals = 2) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que converte um número para o formato do dinheiro Real.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo number e indica o número a ser formatado para o dinheiro Real.
- O segundo parâmetro é opcional, deve ser do tipo integer e indica quantas casas decimais deve-se ter.

Exemplo de uso:
console.log(${funName()}(1250.999))

Exemplo de retorno:
1.250,99

O retorno sempre será uma string.`;

const numberForFormRealMoney = (numNumber, intDecimals = 2) => {
  if (isStr(numNumber)) {
    numNumber = Number(numNumber);
  };
  if (!isNum(numNumber)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro '${numNumber}' não é do tipo number.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };
  if (isStr(intDecimals)) {
    intDecimals = Number(intDecimals);
  };
  if (!isInt(intDecimals)) {
    intDecimals = 2;
  };

  numNumber = toFixed(numNumber, intDecimals).split('.');
  numNumber[0] = numNumber[0].split(/(?=(?:...)*$)/).join('.');

  return numNumber.join(',');
};

numberForFormRealMoney.name = funAllName;
numberForFormRealMoney.desc = funDesc;
numberForFormRealMoney.help = funHelp;

module.exports = numberForFormRealMoney;
