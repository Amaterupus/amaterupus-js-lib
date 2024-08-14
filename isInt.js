// Importações:


// Nome da função:
const funName = () => `isInt`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo integer.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(1));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isInt = (anyParameter) => {
  if (typeof anyParameter === 'number' && anyParameter % 1 === 0) {
    return true;
  };
  return false;
};

isInt.nome = funAllName;
isInt.desc = funDesc;
isInt.help = funHelp;

module.exports = isInt;
