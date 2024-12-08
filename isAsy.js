// Importações:


// Nome da função:
const funName = () => `isAsy`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é uma async function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(async () => {}));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isAsy = (anyParameter) => {
  if (typeof anyParameter === 'function') {
    if (/^async\s/.test(anyParameter.toString())) {
      return true;
    };
  };
  return false;
};

isAsy.name = funAllName;
isAsy.desc = funDesc;
isAsy.help = funHelp;

module.exports = isAsy;
