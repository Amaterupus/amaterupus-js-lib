// Importações:


// Nome da função:
const funName = () => `isObj`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo object.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}({}));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isObj = (anyParameter) => {
  if (typeof anyParameter === 'object' && anyParameter !== null && anyParameter.constructor !== Array) {
    return true;
  };
  return false;
};

isObj.nome = funAllName;
isObj.desc = funDesc;
isObj.help = funHelp;

module.exports = isObj;
