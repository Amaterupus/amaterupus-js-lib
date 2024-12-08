// Importações:


// Nome da função:
const funName = () => `isFlo`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo float.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(1.1));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isFlo = (anyParameter) => {
  if (typeof anyParameter === 'number' && anyParameter % 1 !== 0) {
    return true;
  };
  return false;
};

isFlo.name = funAllName;
isFlo.desc = funDesc;
isFlo.help = funHelp;

module.exports = isFlo;
