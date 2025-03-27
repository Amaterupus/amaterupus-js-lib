// Importações:


// Nome da função:
const funName = () => `isAsy`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é uma async function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(async () => {});

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é uma async function.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isAsy(async () => {});
 * // Retorno:
 * // true
 */
const isAsy = (anyParameter) => {
  if (typeof anyParameter === 'function') {
    if (/^async\s/.test(anyParameter.toString())) {
      return true;
    };
  };
  return false;
};

isAsy.name = funAllName;
isAsy.desc = funDesc;
isAsy.help = funHelp;

module.exports = isAsy;
