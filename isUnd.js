// Importações:


// Nome da função:
const funName = () => `isUnd`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo undefined.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(undefined);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo undefined.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isUnd(undefined);
 * // Retorno:
 * // true
 */
const isUnd = (anyParameter) => {
  if (anyParameter === undefined) {
    return true;
  };
  return false;
};

isUnd.name = funAllName;
isUnd.desc = funDesc;
isUnd.help = funHelp;

module.exports = isUnd;
