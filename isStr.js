// Importações:


// Nome da função:
const funName = () => `isStr`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo string.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}('1');

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo string.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isStr('1');
 * // Retorno:
 * // true
 */
const isStr = (anyParameter) => {
  if (typeof anyParameter === 'string') {
    return true;
  };
  return false;
};

isStr.name = funAllName;
isStr.desc = funDesc;
isStr.help = funHelp;

module.exports = isStr;
