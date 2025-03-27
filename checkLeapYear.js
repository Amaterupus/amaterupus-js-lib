// Importações:
const isStr = require('./isStr'); const isInt = require('./isInt');

// Nome da função:
const funName = () => `checkLeapYear`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intYear) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o ano passado é bissexto.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo integer e indica o ano.

Exemplo de uso:
${funName()}(4);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o ano passado é bissexto.
 * 
 * @param {number} intYear Obrigatório (integer). Indica o ano a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * checkLeapYear(4);
 * // Retorno:
 * // true
 */
const checkLeapYear = (intYear) => {
  if (isStr(intYear)) {
    intYear = Number(intYear);
  };
  if (!isInt(intYear)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro '${intYear}' não é do tipo integer.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };

  if (intYear % 4 === 0 && (intYear % 100 !== 0 || intYear % 400 === 0)) return true;
  return false;
};

checkLeapYear.name = funAllName;
checkLeapYear.desc = funDesc;
checkLeapYear.help = funHelp;

module.exports = checkLeapYear;
