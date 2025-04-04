// Importações:


// Nome da função:
const funName = () => `isFun`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(i => i + 1);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo function.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isFun(i => i + 1);
 * // Retorno:
 * // true
 */
const isFun = (anyParameter) => {
  if (typeof anyParameter === 'function' && anyParameter.constructor === Function) {
    return true;
  };
  return false;
};

isFun.name = funAllName;
isFun.desc = funDesc;
isFun.help = funHelp;

module.exports = isFun;
