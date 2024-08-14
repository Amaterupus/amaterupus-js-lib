// Importações:


// Nome da função:
const funName = () => `isStr`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo string.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}('1'));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isStr = (anyParameter) => {
  if (typeof anyParameter === 'string') {
    return true;
  };
  return false;
};

isStr.nome = funAllName;
isStr.desc = funDesc;
isStr.help = funHelp;

module.exports = isStr;
