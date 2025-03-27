// Importações:


// Nome da função:
const funName = () => `isPro`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é uma promise.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(new Promise((res) => res('test')));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é uma promise.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isPro(new Promise((res) => res('test')));
 * // Retorno:
 * // true
 */
const isPro = (anyParameter) => {
  if (anyParameter instanceof Promise || typeof anyParameter === 'object' && anyParameter !== null && typeof anyParameter.then === 'function' && typeof anyParameter.catch === 'function' && typeof anyParameter.finally === 'function') {
    return true;
  };
  return false;
};

isPro.name = funAllName;
isPro.desc = funDesc;
isPro.help = funHelp;

module.exports = isPro;
