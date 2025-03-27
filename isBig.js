// Importações:


// Nome da função:
const funName = () => `isBig`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo bigint.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(1n);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo bigint.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isBig(1n);
 * // Retorno:
 * // true
 */
const isBig = (anyParameter) => {
  if (typeof anyParameter === 'bigint') {
    return true;
  };
  return false;
};

isBig.name = funAllName;
isBig.desc = funDesc;
isBig.help = funHelp;

module.exports = isBig;
