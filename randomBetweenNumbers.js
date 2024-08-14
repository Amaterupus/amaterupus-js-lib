// Importações:
const isArr = require('./isArr'); const isStr = require('./isStr'); const isNum = require('./isNum'); const isFlo = require('./isFlo');

// Nome da função:
const funName = () => `randomBetweenNumbers`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (strReturnIntegerOrFloat = 'int', ...arrArraysOfIntervals) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que escolhe aleatoriamente um número entre os intervalos de índice 0 e 1 dos arrays passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo string, indica se o número randômico deve ser um integer ou float deve seguir algum desses padrões:
'int' para um integer;
'flo' para um float.
- O segundo parâmetro é obrigatório e os demais são opcionais, devem ser do tipo array e indicam os intervalos do número randômico.

Exemplo de uso:
console.log(${funName()}(null, [1, 2], [5, 6]));

Exemplo de retorno:
5

O retorno sempre será um number.`;

const randomBetweenNumbers = (strReturnIntegerOrFloat = 'int', ...arrArraysOfIntervals) => {
  if (arrArraysOfIntervals.length < 1) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O segundo parâmetro não foi passado.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };
  const ArrArraysDeIntervalosCopia = JSON.parse(JSON.stringify(arrArraysOfIntervals));
  let objNumerosUnicos = new Set();
  for (let i = 0; i < ArrArraysDeIntervalosCopia.length; i++) {
    const ArrIntervalos = ArrArraysDeIntervalosCopia[i];
    if (!isArr(ArrIntervalos) || ArrIntervalos.length < 2) {
      console.error(`ERRO FUNÇÃO: ${funAllName()}`);
      console.error(`ERRO: Há algum problema com o segundo ou demais parâmetros ('${ArrIntervalos}' não é do tipo array OU '${ArrIntervalos}' não possui 2 elementos).`);
      console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
      return null;
    };
    if (isStr(ArrIntervalos[0])) {
      ArrIntervalos[0] = Number(ArrIntervalos[0]);
    };
    if (isStr(ArrIntervalos[1])) {
      ArrIntervalos[1] = Number(ArrIntervalos[1]);
    };
    if (!isNum(ArrIntervalos[0]) || !isNum(ArrIntervalos[1])) {
      console.error(`ERRO FUNÇÃO: ${funAllName()}`);
      console.error(`ERRO: Há algum problema com o segundo ou demais parâmetros ('${ArrIntervalos[0]}' não é do tipo number OU '${ArrIntervalos[0]}' não é do tipo number).`);
      console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
      return null;
    };
    if (isStr(strReturnIntegerOrFloat)) {
      strReturnIntegerOrFloat = strReturnIntegerOrFloat.toLowerCase();
      if (strReturnIntegerOrFloat !== 'int' && strReturnIntegerOrFloat !== 'flo') {
        if (isFlo(ArrIntervalos[0]) || isFlo(ArrIntervalos[1])) {
          strReturnIntegerOrFloat = 'flo';
        } else {
          strReturnIntegerOrFloat = 'int';
        };
      };
    } else {
      if (isFlo(ArrIntervalos[0]) || isFlo(ArrIntervalos[1])) {
        strReturnIntegerOrFloat = 'flo';
      } else {
        strReturnIntegerOrFloat = 'int';
      };
    };
    if (ArrIntervalos[0] > ArrIntervalos[1]) {
      const NumTemporario1 = ArrIntervalos[0];
      const NumTemporario2 = ArrIntervalos[1];
      ArrArraysDeIntervalosCopia.splice(i, 1);
      ArrArraysDeIntervalosCopia.splice(i, 0, [NumTemporario2, NumTemporario1]);
    };
    for (let i = ArrIntervalos[0]; i <= ArrIntervalos[1]; i++) {
      objNumerosUnicos.add(i);
    };
  };

  const NumTotalIntervalos = objNumerosUnicos.size
  const ArrIntervalosValidos = [];
  for (const AnyValor of objNumerosUnicos) {
    ArrIntervalosValidos.push(AnyValor);
  };

  const NumAleatorio = Math.random();
  const NumIndiceAleatorio = Math.floor(NumAleatorio * NumTotalIntervalos);
  const NumNumeroAleatorio = NumAleatorio + ArrIntervalosValidos[NumIndiceAleatorio];

  if (strReturnIntegerOrFloat === 'flo') {
    return NumNumeroAleatorio;
  } else {
    return Math.floor(NumNumeroAleatorio);
  };
};

randomBetweenNumbers.nome = funAllName;
randomBetweenNumbers.desc = funDesc;
randomBetweenNumbers.help = funHelp;

module.exports = randomBetweenNumbers;
