// Importações:


// Nome da função:
const funName = () => `isCla`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que verifica se o dado é do tipo class.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}(class {}));

Exemplo de retorno:
true

O retorno sempre será um boolean.`;

const isCla = (anyParameter) => {
  if (typeof anyParameter === 'function') {
    if (/^class\s/.test(anyParameter.toString())) {
      return true;
    };
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

isCla.name = funAllName;
isCla.desc = funDesc;
isCla.help = funHelp;

module.exports = isCla;
