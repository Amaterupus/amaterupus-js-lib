// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const ceil = require('./ceil');

// Nome da função:
const funName = () => `floor`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (strNumber, booWorkingWithNegatives = false) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que subtrai 1 do último elemento de um número.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo number e indica o número.
- O segundo parâmetro é opcional, deve ser do tipo boolean e indica se a função trabalhará com valores negativos ou se o menor retorno será '0'.

Exemplo de uso:
${funName()}('123.123');

Exemplo de retorno:
123.122

O retorno sempre será uma string.`;

/**
 * Função que subtrai 1 do último elemento de um número.
 * 
 * @param {number} strNumber Obrigatório (number). Indica o número a ser processado.
 * @param {boolean} [booWorkingWithNegatives=false] Opcional (boolean). Indica se a função trabalhará com valores negativos ou se o menor retorno será '0'.
 * @returns {string} String.
 * 
 * @example
 * floor('123.123');
 * // Retorno:
 * // 123.122
 */
const floor = (strNumber, booWorkingWithNegatives = false) => {
  if (!isStr(strNumber) || !isNum(Number(strNumber))) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: Há algum problema com o primeiro parâmetro ('${strNumber}' não é do tipo string OU '${strNumber}' não representa o tipo number).`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };

  if (strNumber[0] === '-') {
    strNumber = strNumber.substring(1);
    return `-${ceil(strNumber)}`;
  }

  const BooNumeroInteiro = strNumber.indexOf('.') === -1 ? true : false;

  if (BooNumeroInteiro) {
    const IntComprimentoTotal = strNumber.length;
    
    strNumber = (Number(strNumber) - 1).toString();

    if (strNumber === '-1') {
      strNumber = '0'.padStart(IntComprimentoTotal, '0');
    } else {
      strNumber = strNumber.padStart(IntComprimentoTotal, '0');
    };
    
    return strNumber;
  };

  const ArrNumeroEmArray = strNumber.toString().split('.');
  let strParteInteira = ArrNumeroEmArray[0];
  let strParteDecimal = ArrNumeroEmArray[1];
  const IntComprimentoParteInteira = strParteInteira.length;
  const IntComprimentoParteDecimal = strParteDecimal.length;

  strParteDecimal = (Number(strParteDecimal) - 1).toString();

  if (strParteDecimal === '-1') {
    strParteInteira = (Number(strParteInteira) - 1).toString();

    if (strParteInteira === '-1') {
      strParteInteira = '0'.padStart(IntComprimentoParteInteira, '0');
      strParteDecimal = '0'.padStart(IntComprimentoParteDecimal, '0');
      if (booWorkingWithNegatives) {
        return `-${ceil(`${strParteInteira}.${strParteDecimal}`)}`;
      } else {
        return `${strParteInteira}.${strParteDecimal}`;
      };
    } else {
      strParteInteira = strParteInteira.padStart(IntComprimentoParteInteira, '0');
      strParteDecimal = '9'.padStart(IntComprimentoParteDecimal, '9');
    };
  } else {
    strParteDecimal = strParteDecimal.padStart(IntComprimentoParteDecimal, '0');
  };

  return `${strParteInteira}.${strParteDecimal}`;
};

floor.name = funAllName;
floor.desc = funDesc;
floor.help = funHelp;

module.exports = floor;
