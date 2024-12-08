// Importações:


// Nome da função:
const funName = () => `isIns`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é uma instance.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(new function fcoFuncaoConstrutora(nome) {this.name = nome}));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isIns = (anyParameter) => {
  if (typeof anyParameter === 'object' && anyParameter !== null && Object.getPrototypeOf(anyParameter) !== Object.prototype && Object.getPrototypeOf(anyParameter) !== Array.prototype) {
    return true;
  };
  return false;
};

isIns.name = funAllName;
isIns.desc = funDesc;
isIns.help = funHelp;

module.exports = isIns;
