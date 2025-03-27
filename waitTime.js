// Importações:
const isInt = require('./isInt');

// Nome da função:
const funName = () => `waitTime`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intMilliseconds) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função assíncrona que aguarda o tempo passado como parâmetro em milissegundos baseado em uma Promise.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo integer e indica o tempo em milissegundos a ser aguardado.

Exemplo de uso:
${funName()}(3000);

Exemplo de retorno:
Promise { <pending> }

O retorno sempre será uma promise.`;

/**
 * Função assíncrona que aguarda o tempo passado como parâmetro em milissegundos baseado em uma Promise.
 * 
 * @param {number} [intMilliseconds=1000] Opcional (integer). Indica o tempo em milissegundos a ser aguardado.
 * @returns {Promise<boolean>} Promise.
 * 
 * @example
 * waitTime(3000);
 * // Retorno:
 * // Promise { <pending> }
 */
const waitTime = async (intMilliseconds = 1000) => {
  if (!isInt(intMilliseconds) || intMilliseconds < 0) {
    intMilliseconds = 1000;
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, intMilliseconds);
  });
};

waitTime.name = funAllName;
waitTime.desc = funDesc;
waitTime.help = funHelp;

module.exports = waitTime;
