// Importações:
const isInt = require('./isInt');

// Nome da função:
const funName = () => `waitTimeNode`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intMilliseconds) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função para Node.js que aguarda o tempo passado como parâmetro em milissegundos.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo integer e indica o tempo em milissegundos a ser aguardado.

Exemplo de uso:
${funName()}(3000);

Exemplo de retorno:
Promise { true }

O retorno sempre será uma promise.`;

/**
 * Função para Node.js que aguarda o tempo passado como parâmetro em milissegundos.
 * 
 * @param {number} [intMilliseconds=1000] Opcional (integer). Indica o tempo em milissegundos a ser aguardado.
 * @returns {Promise<boolean>} Promise.
 * 
 * @example
 * waitTimeNode(3000);
 * // Retorno:
 * // Promise { true }
 */
const waitTimeNode = async (intMilliseconds = 1000) => {
  if (!isInt(intMilliseconds) || intMilliseconds < 0) {
    intMilliseconds = 1000;
  };

  const insSharedBuffer = new Int32Array(new SharedArrayBuffer(4)); // Buffer de 4 bytes
  Atomics.wait(insSharedBuffer, 0, 0, intMilliseconds); // Pausa real

  return true;
};

waitTimeNode.name = funAllName;
waitTimeNode.desc = funDesc;
waitTimeNode.help = funHelp;

module.exports = waitTimeNode;
