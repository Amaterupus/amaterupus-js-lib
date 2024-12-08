// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const floor = require('./floor');

// Nome da função:
const funName = () => `ceil`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (strNumber) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que soma 1 ao último elemento de um número.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo number e indica o número.

Exemplo de uso:
console.log(${funName()}('123.123'));

Exemplo de retorno:
123.124

O retorno sempre será uma string.`;

const ceil = (strNumber) => {
  if (!isStr(strNumber) || !isNum(Number(strNumber))) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: Há algum problema com o primeiro parâmetro ('${strNumber}' não é do tipo string OU '${strNumber}' não representa o tipo number).`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };

  if (strNumber[0] === '-') {
    strNumber = floor(strNumber.substring(1));
    if (Number(strNumber) === 0) {
      return `${strNumber}`;
    };
    return `-${strNumber}`;
  }

  const BooNumeroInteiro = strNumber.indexOf('.') === -1 ? true : false;

  if (BooNumeroInteiro) {
    const IntComprimentoTotal = strNumber.length;
    
    strNumber = (Number(strNumber) + 1).toString().padStart(IntComprimentoTotal, '0');
    
    return strNumber;
  };

  const ArrNumeroEmArray = strNumber.toString().split('.');
  let strParteInteira = ArrNumeroEmArray[0];
  let strParteDecimal = ArrNumeroEmArray[1];
  const IntComprimentoParteInteira = strParteInteira.length;
  const IntComprimentoParteDecimal = strParteDecimal.length;

  strParteDecimal = (Number(strParteDecimal) + 1).toString();

  if (strParteDecimal.length > IntComprimentoParteDecimal) {
    strParteInteira = (Number(strParteInteira) + 1).toString().padStart(IntComprimentoParteInteira, '0');
    strParteDecimal = '0'.padStart(IntComprimentoParteDecimal, '0');

  } else {
    strParteDecimal = strParteDecimal.padStart(IntComprimentoParteDecimal, '0');
  };

  return `${strParteInteira}.${strParteDecimal}`;
};

ceil.name = funAllName;
ceil.desc = funDesc;
ceil.help = funHelp;

module.exports = ceil;
