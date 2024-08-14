// Importações:
const isBoo = require('./isBoo'); const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt'); const isNul = require('./isNul'); const isFlo = require('./isFlo'); const isArr = require('./isArr'); const isObj = require('./isObj'); const isIns = require('./isIns'); const isFun = require('./isFun'); const isCon = require('./isCon'); const isFac = require('./isFac'); const isCla = require('./isCla'); const isUnd = require('./isUnd');

// Nome da função:
const funName = () => `is_`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna o tipo do dado.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado.

Exemplo de uso:
console.log(${funName()}((a) => { return { a: a } }))

Exemplo de retorno:
[ [ 'fun', 'fac' ], [ 'function', 'factory function' ] ]

O retorno sempre será um array de elementos.`;

const is_ = (anyParameter) => {
  const ArrRetorno = [];
  const ArrNomeAbreviado = [];
  const ArrNomeCompleto = [];
  if (isBoo(anyParameter)) { ArrNomeAbreviado.push('boo'); ArrNomeCompleto.push('boolean'); };
  if (isStr(anyParameter)) { ArrNomeAbreviado.push('str'); ArrNomeCompleto.push('string'); };
  if (isNum(anyParameter)) { ArrNomeAbreviado.push('num'); ArrNomeCompleto.push('number'); };
  if (isInt(anyParameter)) { ArrNomeAbreviado.push('int'); ArrNomeCompleto.push('integer'); };
  if (isFlo(anyParameter)) { ArrNomeAbreviado.push('flo'); ArrNomeCompleto.push('float'); };
  if (isArr(anyParameter)) { ArrNomeAbreviado.push('arr'); ArrNomeCompleto.push('array'); };
  if (isObj(anyParameter)) { ArrNomeAbreviado.push('obj'); ArrNomeCompleto.push('object'); };
  if (isIns(anyParameter)) { ArrNomeAbreviado.push('ins'); ArrNomeCompleto.push('instance'); };
  if (isFun(anyParameter)) { ArrNomeAbreviado.push('fun'); ArrNomeCompleto.push('function'); };
  if (isCon(anyParameter)) { ArrNomeAbreviado.push('con'); ArrNomeCompleto.push('constructor function'); };
  if (isFac(anyParameter)) { ArrNomeAbreviado.push('fac'); ArrNomeCompleto.push('factory function'); };
  if (isCla(anyParameter)) { ArrNomeAbreviado.push('cla'); ArrNomeCompleto.push('class'); };
  if (isNul(anyParameter)) { ArrNomeAbreviado.push('nul'); ArrNomeCompleto.push('null'); };
  if (isUnd(anyParameter)) { ArrNomeAbreviado.push('und'); ArrNomeCompleto.push('undefined'); };
  if (ArrNomeAbreviado.length < 1) { ArrNomeAbreviado.push('-'); ArrNomeCompleto.push('-'); };
  ArrRetorno.push(ArrNomeAbreviado);
  ArrRetorno.push(ArrNomeCompleto);
  return ArrRetorno;
};

is_.nome = funAllName;
is_.desc = funDesc;
is_.help = funHelp;

module.exports = is_;
