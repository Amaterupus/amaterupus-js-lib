// Importações:


// Nome da função:
const funName = () => `isCon`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é uma constructor function.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(function () {}));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isCon = (anyParameter) => {
  if (typeof anyParameter === 'function' && !/^class\s/.test(anyParameter.toString())) {
    try {
      const AnyInstancia = new anyParameter();
      if (typeof AnyInstancia === 'object' && AnyInstancia !== null && AnyInstancia instanceof anyParameter) {
        return true;
      };
    } catch (e) {
      return false;
    };
  };
  return false;
};

isCon.name = funAllName;
isCon.desc = funDesc;
isCon.help = funHelp;

module.exports = isCon;
