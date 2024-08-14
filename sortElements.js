// Importações:
const isArr = require('./isArr'); const isStr = require('./isStr'); const isObj = require('./isObj'); const isInt = require('./isInt'); const isUnd = require('./isUnd'); const isNul = require('./isNul'); const isBoo = require('./isBoo'); const isNum = require('./isNum'); const isFun = require('./isFun');

// Nome da função:
const funName = () => `sortElements`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (arrArrayToSort, strSortMode = 'cre', strSortType = 'vt', ...arrArrayIndicesOrObjectKeys) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo array e indica o array a ser ordenado.
- O segundo parâmetro é opcional, deve ser do tipo string, indica o modo de ordenagem e deve seguir algum desses padrões:
'cre' para ordenar de forma crescente;
'dec' para ordenar de forma decrescente.
- O terceiro parâmetro é opcional, deve ser do tipo string, indica o tipo de ordenagem e deve seguir algum desses padrões:
'vt' para ordenar verificando o valor e o tipo;
'v' para ordenar verificando apenas o valor;
't' para ordenar verificando apenas o tipo.
- O quarto parâmetro é opcional, deve ser do tipo string, indica o tipo de ordenagem e deve seguir algum desses padrões:

Exemplo de uso:
console.log(${funName()}([
  [ 'b', 'a', 'a', 'a', 'a', 'c'],
  [ 'a', 'a', 'a', 'a', 'b', 'a'],
  [ 'b', 'c', 'a', 'a', 'c', 'e'],
  [ 'b', 'c', 'd', 'a', 'd', 'g'],
  [ 'b', 'c', 'd', 'e', 'e', 'i'],
  [ 'b', 'c', 'd', 'a', 'f', 'h'],
  [ 'b', 'c', 'a', 'a', 'g', 'f'],
  [ 'a', 'a', 'a', 'a', 'h', 'b'],
  [ 'b', 'a', 'a', 'a', 'i', 'd']
], null, null, 0));

Exemplo de retorno:
[
  [ 'a', 'a', 'a', 'a', 'b', 'a' ],
  [ 'a', 'a', 'a', 'a', 'h', 'b' ],
  [ 'b', 'a', 'a', 'a', 'a', 'c' ],
  [ 'b', 'c', 'a', 'a', 'c', 'e' ],
  [ 'b', 'c', 'd', 'a', 'd', 'g' ],
  [ 'b', 'c', 'd', 'e', 'e', 'i' ],
  [ 'b', 'c', 'd', 'a', 'f', 'h' ],
  [ 'b', 'c', 'a', 'a', 'g', 'f' ],
  [ 'b', 'a', 'a', 'a', 'i', 'd' ]
]

O retorno sempre será um array de elementos.`;

const sortElements = (arrArrayToSort, strSortMode = 'cre', strSortType = 'vt', ...arrArrayIndicesOrObjectKeys) => {
  if (!isArr(arrArrayToSort) || arrArrayToSort.length < 1) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: Há algum problema com o primeiro parâmetro ('${arrArrayToSort}' não é do tipo array OU '${arrArrayToSort}' não possui nenhum elemento).`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return [ null ];
  };
  if (!isStr(arrArrayToSort[0]) && arrArrayIndicesOrObjectKeys.length < 1) {
    if (isArr(arrArrayToSort[0])) {
      arrArrayIndicesOrObjectKeys = [0];
    } else if (isObj(arrArrayToSort[0])) {
      for (let i in arrArrayToSort[0]) {
        arrArrayIndicesOrObjectKeys = [`${i}`];
        break;
      };
    };
  };
  let strTipoElementos = '';
  if (isStr(arrArrayToSort[0])) {
    strTipoElementos = 'string';
    for (let i = 0; i < arrArrayToSort.length; i++) {
      const StrTexto = arrArrayToSort[i];
      if (!isStr(StrTexto)) {
        strTipoElementos = 'any';
        break;
      };
    };
  } else if (isArr(arrArrayToSort[0])) {
    strTipoElementos = 'array';
    for (let i = 0; i < arrArrayToSort.length; i++) {
      const ArrElemento = arrArrayToSort[i];
      if (!isArr(ArrElemento)) {
        strTipoElementos = 'any';
        break;
      };
      for (let i = 0; i < arrArrayIndicesOrObjectKeys.length; i++) {
        const IntIndice = arrArrayIndicesOrObjectKeys[i];
        if (!isInt(IntIndice) || IntIndice < 0 || IntIndice > (ArrElemento.length - 1)) {
          console.error(`ERRO FUNÇÃO: ${funAllName()}`);
          console.error(`ERRO: Há algum problema com o quarto ou demais parâmetros ('${IntIndice}' não é do tipo integer OU '${IntIndice}' é menor que 0 OU '${IntIndice}' é maior que o maior índice de '${ArrElemento}').`);
          console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
          return [ null ];
        };
      };
    };
  } else if (isObj(arrArrayToSort[0])) {
    strTipoElementos = 'object';
    for (let i = 0; i < arrArrayToSort.length; i++) {
      const ObjElemento = arrArrayToSort[i];
      if (!isObj(ObjElemento)) {
        strTipoElementos = 'any';
        break;
      };
      for (let i = 0; i < arrArrayIndicesOrObjectKeys.length; i++) {
        const StrChave = arrArrayIndicesOrObjectKeys[i];
        if (!isStr(StrChave) || !ObjElemento.hasOwnProperty(StrChave)) {
          console.error(`ERRO FUNÇÃO: ${funAllName()}`);
          console.error(`ERRO: Há algum problema com o quarto ou demais parâmetros ('${StrChave}' não é do tipo string OU '${StrChave}' não é uma chave do objeto '${ObjElemento}').`);
          console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
          return [ null ];
        };
      };
    };
  } else {
    strTipoElementos = 'any';
  };
  if (isStr(strSortMode)) {
    strSortMode = strSortMode.toLowerCase();
    if (strSortMode !== 'cre' && strSortMode !== 'dec') {
      strSortMode = 'cre';
    };
  } else {
    strSortMode = 'cre';
  };
  if (isStr(strSortType)) {
    strSortType = strSortType.toLowerCase();
    if (strSortType !== 'v' && strSortType !== 't' && strSortType !== 'vt') {
      strSortType = 'vt';
    };
  } else {
    strSortType = 'vt';
  };

  const ArrArrayParaOrdenarCopia = JSON.parse(JSON.stringify(arrArrayToSort));

  const funCompararValoresETipos = (anyA, anyB) => {
    if (isUnd(anyA) && isUnd(anyB)) { return 0; };
    if (isUnd(anyA)) { return -1; };
    if (isUnd(anyB)) { return 1; };
    if (isNul(anyA) && isNul(anyB)) { return 0; };
    if (isNul(anyA)) { return -1; };
    if (isNul(anyB)) { return 1; };
    if (isBoo(anyA) && isBoo(anyB)) { if (anyA && anyB || !anyA && !anyB) { return 0; } else if (anyA) { return -1; } else { return 1; } };
    if (isBoo(anyA)) { return -1; };
    if (isBoo(anyB)) { return 1; };
    if (isNum(anyA) && isNum(anyB)) { return anyA - anyB; };
    if (isNum(anyA)) { return -1; };
    if (isNum(anyB)) { return 1; };
    if (isStr(anyA) && isStr(anyB)) { return anyA.localeCompare(anyB); };
    if (isStr(anyA)) { return -1; };
    if (isStr(anyB)) { return 1; };
    if (isFun(anyA) && isFun(anyB)) { return 0; };
    if (isFun(anyA)) { return -1; };
    if (isFun(anyB)) { return 1; };
    if (isObj(anyA) && isObj(anyB)) { return 0; };
    if (isObj(anyA)) { return -1; };
    if (isObj(anyB)) { return 1; };
    if (isArr(anyA) && isArr(anyB)) { return 0; };
    if (isArr(anyA)) { return -1; };
    if (isArr(anyB)) { return 1; };
    return 0;
  };

  const funCompararApenasValores = (anyA, anyB) => {
    if (!isStr(anyA)) { anyA = anyA.toString(); };
    if (!isStr(anyB)) { anyB = anyB.toString(); };
    return anyA.localeCompare(anyB);
  };

  const funCompararApenasTipos = (anyA, anyB) => {
    if (isUnd(anyA) && isUnd(anyB)) { return 0; };
    if (isUnd(anyA)) { return -1; };
    if (isUnd(anyB)) { return 1; };
    if (isNul(anyA) && isNul(anyB)) { return 0; };
    if (isNul(anyA)) { return -1; };
    if (isNul(anyB)) { return 1; };
    if (isBoo(anyA) && isBoo(anyB)) { return 0 };
    if (isBoo(anyA)) { return -1; };
    if (isBoo(anyB)) { return 1; };
    if (isNum(anyA) && isNum(anyB)) { return 0; };
    if (isNum(anyA)) { return -1; };
    if (isNum(anyB)) { return 1; };
    if (isStr(anyA) && isStr(anyB)) { return 0; };
    if (isStr(anyA)) { return -1; };
    if (isStr(anyB)) { return 1; };
    if (isFun(anyA) && isFun(anyB)) { return 0; };
    if (isFun(anyA)) { return -1; };
    if (isFun(anyB)) { return 1; };
    if (isObj(anyA) && isObj(anyB)) { return 0; };
    if (isObj(anyA)) { return -1; };
    if (isObj(anyB)) { return 1; };
    if (isArr(anyA) && isArr(anyB)) { return 0; };
    if (isArr(anyA)) { return -1; };
    if (isArr(anyB)) { return 1; };
    return 0;
  };

  let arrArrayDeElementosOrdenados = [];
  if (strTipoElementos === 'string') {
    arrArrayDeElementosOrdenados = ArrArrayParaOrdenarCopia.sort((anyA, anyB) => {
      return anyA.localeCompare(anyB);
    });
  } else if (strTipoElementos === 'any') {
    arrArrayDeElementosOrdenados = ArrArrayParaOrdenarCopia.sort((anyA, anyB) => {
      if (strSortType === 'vt') {
        return funCompararValoresETipos(anyA, anyB);
      } else if (strSortType === 'v') {
        return funCompararApenasValores(anyA, anyB);
      } else {
        return funCompararApenasTipos(anyA, anyB);
      };
    });
  } else {
    arrArrayDeElementosOrdenados = ArrArrayParaOrdenarCopia.sort((anyA, anyB) => {
      const AnyIndiceOuChaveOrdenar = arrArrayIndicesOrObjectKeys[arrArrayIndicesOrObjectKeys.length - 1];
      if (arrArrayIndicesOrObjectKeys.length === 1) {
        if (strSortType === 'vt') {
          return funCompararValoresETipos(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        } else if (strSortType === 'v') {
          return funCompararApenasValores(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        } else {
          return funCompararApenasTipos(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        };
      } else {
        for (let i = arrArrayIndicesOrObjectKeys.length - 2; i >= 0; i--) {
          const AnyIndiceOuChave = arrArrayIndicesOrObjectKeys[i];
          if (anyA[AnyIndiceOuChave] !== anyB[AnyIndiceOuChave]) {
            return 0;
          };
        };
        if (strSortType === 'vt') {
          return funCompararValoresETipos(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        } else if (strSortType === 'v') {
          return funCompararApenasValores(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        } else {
          return funCompararApenasTipos(anyA[AnyIndiceOuChaveOrdenar], anyB[AnyIndiceOuChaveOrdenar]);
        };
      };
    });
  };

  if (strSortMode === 'cre') {
    return arrArrayDeElementosOrdenados;
  } else {
    return arrArrayDeElementosOrdenados.reverse();
  };
};

sortElements.nome = funAllName;
sortElements.desc = funDesc;
sortElements.help = funHelp;

module.exports = sortElements;
