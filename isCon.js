// Importações:


// Nome da função:
const funName = () => `isCon`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado fornecido é uma constructor function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(function () {});

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

/**
 * Função que verifica se o dado fornecido é uma constructor function.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {boolean} Boolean.
 * 
 * @example
 * isCon(function () {});
 * // Retorno:
 * // true
 */
const isCon = (anyParameter) => {
  if (typeof anyParameter === 'function' && !/^class\s/.test(anyParameter.toString())) {
    try {
      const AnyInstancia = new anyParameter();
      if (typeof AnyInstancia === 'object' && AnyInstancia !== null && AnyInstancia instanceof anyParameter) {
        return true;
      };
    } catch (e) {
      return false;
    };
  };
  return false;
};

isCon.name = funAllName;
isCon.desc = funDesc;
isCon.help = funHelp;

module.exports = isCon;
