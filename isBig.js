// Importações:


// Nome da função:
const funName = () => `isBig`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo bigint.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(1n));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isBig = (anyParameter) => {
  if (typeof anyParameter === 'bigint') {
    return true;
  };
  return false;
};

isBig.nome = funAllName;
isBig.desc = funDesc;
isBig.help = funHelp;

module.exports = isBig;
