// Importações:


// Nome da função:
const funName = () => `isNum`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo number.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(1);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo number.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isNum(1);
 * // Retorno:
 * // true
 */
const isNum = (anyParameter) => {
  if (typeof anyParameter === 'number') {
    return true;
  };
  return false;
};

isNum.name = funAllName;
isNum.desc = funDesc;
isNum.help = funHelp;

module.exports = isNum;
