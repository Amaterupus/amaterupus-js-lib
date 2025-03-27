// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt');

// Nome da função:
const funName = () => `toFixed`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (numNumber, intDecimals = 0) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que faz o mesmo que '.toFixed(precision)', mas sem arredondar.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo number e indica o número a ser fixado.
- O segundo parâmetro é opcional, deve ser do tipo integer e indica a precisão.

Exemplo de uso:
${funName()}(9.99);

Exemplo de retorno:
9

O retorno sempre será um number.`;

/**
 * Função que faz o mesmo que '.toFixed(precision)', mas sem arredondar..
 * 
 * @param {number} numNumber Obrigatório (number). Indica o número a ser fixado.
 * @param {number} [intDecimals=0] Opcional (integer). Indica a precisão.
 * @returns {number} Number.
 * 
 * @example
 * toFixed(9.99);
 * // Retorno:
 * // 9
 */
const toFixed = (numNumber, intDecimals = 0) => {
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
    intDecimals = 0;
  };

  const IntCasas = 10 ** intDecimals;

  return ((Math.trunc((numNumber * IntCasas))) / IntCasas).toFixed(intDecimals);
};

toFixed.name = funAllName;
toFixed.desc = funDesc;
toFixed.help = funHelp;

module.exports = toFixed;
