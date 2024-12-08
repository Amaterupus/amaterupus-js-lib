// Descrição da biblioteca:
const funDesc = () => `--- Biblioteca de JavaScript do Amaterupus.`;

// Ajuda da biblioteca:
const funHelp = () => `${funDesc()}

${funMostrarFuncoes()}

Use 'functionName.help()' para detalhes sobre ela.
Bom uso!`;

const amaterupus = {};

amaterupus.arraysWithElementInElements = require('./arraysWithElementInElements');
amaterupus.calculateNumerology = require('./calculateNumerology');
amaterupus.ceil = require('./ceil');
amaterupus.checkLeapYear = require('./checkLeapYear');
amaterupus.checkRepeatedElements = require('./checkRepeatedElements');
amaterupus.dateToSeconds = require('./dateToSeconds');
amaterupus.floor = require('./floor');
amaterupus.is_ = require('./is_');
amaterupus.isArr = require('./isArr');
amaterupus.isBoo = require('./isBoo');
amaterupus.isCla = require('./isCla');
amaterupus.isCon = require('./isCon');
amaterupus.isFac = require('./isFac');
amaterupus.isFlo = require('./isFlo');
amaterupus.isFun = require('./isFun');
amaterupus.isIns = require('./isIns');
amaterupus.isInt = require('./isInt');
amaterupus.isNul = require('./isNul');
amaterupus.isNum = require('./isNum');
amaterupus.isObj = require('./isObj');
amaterupus.isStr = require('./isStr');
amaterupus.isUnd = require('./isUnd');
amaterupus.numberForFormRealMoney = require('./numberForFormRealMoney');
amaterupus.randomBetweenNumbers = require('./randomBetweenNumbers');
amaterupus.randomCharacter = require('./randomCharacter');
amaterupus.ruleOfThree = require('./ruleOfThree');
amaterupus.secondsDetailed = require('./secondsDetailed');
amaterupus.secondsToDate = require('./secondsToDate');
amaterupus.sortElements = require('./sortElements');
amaterupus.toFixed = require('./toFixed');
amaterupus.waitTime = require('./waitTime');
amaterupus.waitTimeNode = require('./waitTimeNode');

const funMostrarFuncoes = () => {
  const ArrFuncoesBiblioteca = Object.keys(amaterupus);
  const ArrFuncoesBibliotecaModificado = [];
  let strFuncoesBiblioteca = '';
  for (let i = 1; i < ArrFuncoesBiblioteca.length; i++) {
    const StrNomeFuncao = ArrFuncoesBiblioteca[i];
    if (StrNomeFuncao !== 'teste' && StrNomeFuncao !== 'desc' && StrNomeFuncao !== 'help') {
      const StrDescricao = `${amaterupus[StrNomeFuncao].desc()}`;
      const StrNome = `${amaterupus[StrNomeFuncao].name()}`;
      ArrFuncoesBibliotecaModificado.push(StrDescricao);
      ArrFuncoesBibliotecaModificado.push(StrNome);
    };
  };
  for (let i = 0; i < ArrFuncoesBibliotecaModificado.length; i++) {
    const StrDescricaoENomeFuncao = ArrFuncoesBibliotecaModificado[i];
    if (strFuncoesBiblioteca === '') {
      strFuncoesBiblioteca = `${StrDescricaoENomeFuncao}`;
    } else if (i % 2 === 0 || i === ArrFuncoesBibliotecaModificado.length - 1) {
      strFuncoesBiblioteca = `${strFuncoesBiblioteca}
${StrDescricaoENomeFuncao}`;
} else {
      strFuncoesBiblioteca = `${strFuncoesBiblioteca}
${StrDescricaoENomeFuncao}
`;
    };
  };
  return strFuncoesBiblioteca;
};

amaterupus.test = () => { console.log(`Teste da biblioteca de JavaScript do Amaterupus.`); }
amaterupus.desc = funDesc;
amaterupus.help = funHelp;

module.exports = amaterupus;
