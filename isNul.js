// Importações:


// Nome da função:
const funName = () => `isNul`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo null.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(null));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isNul = (anyParameter) => {
  if (anyParameter === null) {
    return true;
  };
  return false;
};

isNul.nome = funAllName;
isNul.desc = funDesc;
isNul.help = funHelp;

module.exports = isNul;
