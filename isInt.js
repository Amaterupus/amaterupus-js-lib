// Importações:


// Nome da função:
const funName = () => `isInt`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo integer.`;

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
 * Função que verifica se o dado fornecido é do tipo integer.
 *
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 *
 * @example
 * isInt(1);
 * // Retorno:
 * // true
 */
const isInt = (anyParameter) => {
  if (typeof anyParameter === 'number' && anyParameter % 1 === 0) {
    return true;
  };
  return false;
};

isInt.name = funAllName;
isInt.desc = funDesc;
isInt.help = funHelp;

module.exports = isInt;
