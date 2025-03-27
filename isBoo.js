// Importações:


// Nome da função:
const funName = () => `isBoo`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é do tipo boolean.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(false);

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é do tipo boolean.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isBoo(false);
 * // Retorno:
 * // true
 */
const isBoo = (anyParameter) => {
  if (typeof anyParameter === 'boolean') {
    return true;
  };
  return false;
};

isBoo.name = funAllName;
isBoo.desc = funDesc;
isBoo.help = funHelp;

module.exports = isBoo;
