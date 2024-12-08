// Importações:


// Nome da função:
const funName = () => `isSym`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo symbol.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(Symbol('a')));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isSym = (anyParameter) => {
  if (typeof anyParameter === 'symbol') {
    return true;
  };
  return false;
};

isSym.name = funAllName;
isSym.desc = funDesc;
isSym.help = funHelp;

module.exports = isSym;
