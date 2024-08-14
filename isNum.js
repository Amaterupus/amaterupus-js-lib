// Importações:


// Nome da função:
const funName = () => `isNum`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo number.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(1));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isNum = (anyParameter) => {
  if (typeof anyParameter === 'number') {
    return true;
  };
  return false;
};

isNum.nome = funAllName;
isNum.desc = funDesc;
isNum.help = funHelp;

module.exports = isNum;
