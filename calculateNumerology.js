// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum');

// Nome da função:
const funName = () => `calculateNumerology`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (...arrStringsOrNumbers) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que calcula a numerologia dos parâmetros passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório e os demais são opcionais, devem ser do tipo string ou number e indicam os dados a serem calculados a numerologia.

Exemplo de uso:
console.log(${funName()}(123, 'abc', ' a2c!@~', 92));

Exemplo de retorno:
[ [ '123', 6 ], [ 'abc', 6 ], [ ' a2c!@~', 6 ], [ '92', 11 ] ]

O retorno sempre será um array de arrays.`;

const calculateNumerology = (...arrStringsOrNumbers) => {
  if (arrStringsOrNumbers.length < 1) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro não foi passado.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return [ [ null ] ];
  };
  for (let i = 0; i < arrStringsOrNumbers.length; i++) {
    let anyStringOuNumber = arrStringsOrNumbers[i];
    if (!isStr(anyStringOuNumber) && !isNum(anyStringOuNumber)) {
      console.error(`ERRO FUNÇÃO: ${funAllName()}`);
      console.error(`ERRO: Há algum problema com o primeiro ou demais parâmetros ('${anyStringOuNumber}' não é do tipo number OU '${anyStringOuNumber}' não é do tipo string).`);
      console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
      return [ [ null ] ];
    };
  };

  const funVerificarNumero = (anyStringOuNumber) => {
    switch (anyStringOuNumber) {
      case `1`: case `A`: case `a`: case `À`: case `à`: case `Á`: case `á`: case `Â`: case `â`: case `Ã`: case `ã`: case `Ä`: case `ä`: case `J`: case `j`: case `S`: case `s`: return `1`;
      case `2`: case `B`: case `b`: case `K`: case `k`: case `T`: case `t`: return `2`;
      case `3`: case `C`: case `c`: case `Ç`: case `ç`: case `L`: case `l`: case `U`: case `u`: case `Ù`: case `ù`: case `Ú`: case `ú`: case `Û`: case `û`: case `Ü`: case `ü`: return `3`;
      case `4`: case `D`: case `d`: case `M`: case `m`: case `V`: case `v`: return `4`;
      case `5`: case `E`: case `e`: case `È`: case `è`: case `É`: case `é`: case `Ê`: case `ê`: case `Ë`: case `ë`: case `N`: case `n`: case `Ñ`: case `ñ`: case `W`: case `w`: return `5`;
      case `6`: case `F`: case `f`: case `O`: case `o`: case `Ò`: case `ò`: case `Ó`: case `ó`: case `Ô`: case `ô`: case `Õ`: case `õ`: case `Ö`: case `ö`: case `X`: case `x`: return `6`;
      case `7`: case `G`: case `g`: case `P`: case `p`: case `Y`: case `y`: case `Ý`: case `ý`: case `ÿ`: return `7`;
      case `8`: case `H`: case `h`: case `Q`: case `q`: case `Z`: case `z`: return `8`;
      case `9`: case `I`: case `i`: case `Ì`: case `ì`: case `Í`: case `í`: case `Î`: case `î`: case `Ï`: case `ï`: case `R`: case `r`: return `9`;
      default: return 0;
    };
  };

  const ArrRetorno = [];
  for (let i = 0; i < arrStringsOrNumbers.length; i++) {
    let anyStringOuNumber = arrStringsOrNumbers[i];
    let anyParaString = anyStringOuNumber;

    if (isNum(anyStringOuNumber)) {
      anyParaString = anyStringOuNumber.toString();
    };

    const ArrArrayDeNumeros = [];
    const ArrParaArray = anyParaString.split('');
    for (let i = 0; i < ArrParaArray.length; i++) {
      let strCaractere = ArrParaArray[i];
      ArrArrayDeNumeros.push(funVerificarNumero(strCaractere));
    };

    let intSoma = ArrArrayDeNumeros.reduce((strAcumulador, strNumero) => {
      return (Number(strAcumulador) + Number(strNumero));
    }, 0);

    while (intSoma > 99 || intSoma > 9 && intSoma !== 11 && intSoma !== 22 && intSoma !== 33) {
      intSoma = intSoma.toString().split('').reduce((strAcumulador, strNumero) => {
        return (Number(strAcumulador) + Number(strNumero));
      }, 0);
    };

    ArrRetorno.push([anyParaString, intSoma]);
  };

  return ArrRetorno;
};

calculateNumerology.nome = funAllName;
calculateNumerology.desc = funDesc;
calculateNumerology.help = funHelp;

module.exports = calculateNumerology;
