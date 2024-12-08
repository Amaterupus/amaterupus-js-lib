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

- O primeiro parâmetro é opcional, deve ser do tipo integer e indica o tempo em milissegundos a ser esperado.

Exemplo de uso:
console.log(${funName()}(3));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const waitTimeNode = async (intMilliseconds) => {
  if (!isInt(numFirstQuantity1) || intMilliseconds <= 0) {
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
