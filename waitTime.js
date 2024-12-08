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

- O primeiro parâmetro é opcional, deve ser do tipo integer e indica o tempo em milissegundos a ser esperado.

Exemplo de uso:
console.log(${funName()}(3));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const waitTime = async (intMilliseconds) => {
  if (!isInt(numFirstQuantity1) || intMilliseconds <= 0) {
    intMilliseconds = 1000;
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, intMilliseconds * 1000);
  });
};

waitTime.name = funAllName;
waitTime.desc = funDesc;
waitTime.help = funHelp;

module.exports = waitTime;
