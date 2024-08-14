// Descrição da biblioteca:
const funDesc = () => `--- Biblioteca de JavaScript do Niltex Uchiha.`;

// Ajuda da biblioteca:
const funHelp = () => `${funDesc()}

${funMostrarFuncoes()}

Use 'functionName.help()' para detalhes sobre ela.
Bom uso!`;

const niltexuchihaJsLib = {};

niltexuchihaJsLib.arraysWithElementInElements = require('./arraysWithElementInElements');
niltexuchihaJsLib.calculateNumerology = require('./calculateNumerology');
niltexuchihaJsLib.ceil = require('./ceil');
niltexuchihaJsLib.checkLeapYear = require('./checkLeapYear');
niltexuchihaJsLib.checkRepeatedElements = require('./checkRepeatedElements');
niltexuchihaJsLib.dateToSeconds = require('./dateToSeconds');
niltexuchihaJsLib.floor = require('./floor');
niltexuchihaJsLib.is_ = require('./is_');
niltexuchihaJsLib.isArr = require('./isArr');
niltexuchihaJsLib.isBoo = require('./isBoo');
niltexuchihaJsLib.isCla = require('./isCla');
niltexuchihaJsLib.isCon = require('./isCon');
niltexuchihaJsLib.isFac = require('./isFac');
niltexuchihaJsLib.isFlo = require('./isFlo');
niltexuchihaJsLib.isFun = require('./isFun');
niltexuchihaJsLib.isIns = require('./isIns');
niltexuchihaJsLib.isInt = require('./isInt');
niltexuchihaJsLib.isNul = require('./isNul');
niltexuchihaJsLib.isNum = require('./isNum');
niltexuchihaJsLib.isObj = require('./isObj');
niltexuchihaJsLib.isStr = require('./isStr');
niltexuchihaJsLib.isUnd = require('./isUnd');
niltexuchihaJsLib.numberForFormRealMoney = require('./numberForFormRealMoney');
niltexuchihaJsLib.randomBetweenNumbers = require('./randomBetweenNumbers');
niltexuchihaJsLib.randomCharacter = require('./randomCharacter');
niltexuchihaJsLib.ruleOfThree = require('./ruleOfThree');
niltexuchihaJsLib.secondsDetailed = require('./secondsDetailed');
niltexuchihaJsLib.secondsToDate = require('./secondsToDate');
niltexuchihaJsLib.sortElements = require('./sortElements');
niltexuchihaJsLib.toFixed = require('./toFixed');

const funMostrarFuncoes = () => {
  const ArrFuncoesBiblioteca = Object.keys(niltexuchihaJsLib);
  const ArrFuncoesBibliotecaModificado = [];
  let strFuncoesBiblioteca = '';
  for (let i = 1; i < ArrFuncoesBiblioteca.length; i++) {
    const StrNomeFuncao = ArrFuncoesBiblioteca[i];
    if (StrNomeFuncao !== 'teste' && StrNomeFuncao !== 'desc' && StrNomeFuncao !== 'help') {
      const StrDescricao = `${niltexuchihaJsLib[StrNomeFuncao].desc()}`;
      const StrNome = `${niltexuchihaJsLib[StrNomeFuncao].nome()}`;
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

niltexuchihaJsLib.test = () => { console.log(`Teste da biblioteca de JavaScript do Niltex Uchiha.`); }
niltexuchihaJsLib.desc = funDesc;
niltexuchihaJsLib.help = funHelp;

module.exports = niltexuchihaJsLib;
