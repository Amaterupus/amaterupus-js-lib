// Importações:


// Nome da função:
const funName = () => `isFac`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é uma factory function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(() => { return {} }));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isFac = (anyParameter) => {
  if (typeof anyParameter === 'function') {
    try {
      if (anyParameter() && typeof anyParameter() === 'object' && anyParameter() !== null && anyParameter().constructor === Object) {
        return true;
      };
    } catch (e) {
      return false;
    };
  };
  return false;
};

isFac.nome = funAllName;
isFac.desc = funDesc;
isFac.help = funHelp;

module.exports = isFac;
