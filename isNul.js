// Importações:


// Nome da função:
const funName = () => `isNul`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo null.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(null);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo null.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isNul(null);
 * // Retorno:
 * // true
 */
const isNul = (anyParameter) => {
  if (anyParameter === null) {
    return true;
  };
  return false;
};

isNul.name = funAllName;
isNul.desc = funDesc;
isNul.help = funHelp;

module.exports = isNul;
