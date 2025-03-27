// Importações:
const isUnd = require('./isUnd'); const isNul = require('./isNul'); const isBoo = require('./isBoo'); const isStr = require('./isStr'); const isNum = require('./isNum'); const isInt = require('./isInt'); const isFlo = require('./isFlo'); const isBig = require('./isBig'); const isSym = require('./isSym'); const isArr = require('./isArr'); const isObj = require('./isObj'); const isIns = require('./isIns'); const isPro = require('./isPro'); const isFun = require('./isFun'); const isAsy = require('./isAsy'); const isCon = require('./isCon'); const isFac = require('./isFac'); const isCla = require('./isCla');

// Nome da função:
const funName = () => `is_`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (anyParameter) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna os tipos do dado fornecido.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, pode ser de qualquer tipo e indica o dado a ser verificado.

Exemplo de uso:
${funName()}(a => { a: a });

Exemplo de retorno:
[
  [ 'fun', 'fac' ],
  [ 'function', 'factory function' ]
]

O retorno sempre será um array de duas posições:
- A primeira posição é um array com as abreviações dos tipos identificados.
- A segunda posição é um array com os nomes completos dos tipos identificados.`;

/**
 * Função que retorna os tipos do dado fornecido.
 * 
 * @param {*} [anyParameter] Opcional (any). Dado a ser verificado.
 * @returns {Array<Array<string>>} Array de duas posições:
 *   - A primeira posição é um array com as abreviações dos tipos identificados.
 *   - A segunda posição é um array com os nomes completos dos tipos identificados.
 * 
 * @example
 * is_(a => { a: a });
 * // Retorno:
 * // [
 * //   [ 'fun', 'fac' ],
 * //   [ 'function', 'factory function' ]
 * // ]
 */
const is_ = (anyParameter) => {
  const ArrRetorno = [];
  const ArrNomeAbreviado = [];
  const ArrNomeCompleto = [];
  if (isUnd(anyParameter)) { ArrNomeAbreviado.push('und'); ArrNomeCompleto.push('undefined'); };
  if (isNul(anyParameter)) { ArrNomeAbreviado.push('nul'); ArrNomeCompleto.push('null'); };
  if (isBoo(anyParameter)) { ArrNomeAbreviado.push('boo'); ArrNomeCompleto.push('boolean'); };
  if (isStr(anyParameter)) { ArrNomeAbreviado.push('str'); ArrNomeCompleto.push('string'); };
  if (isNum(anyParameter)) { ArrNomeAbreviado.push('num'); ArrNomeCompleto.push('number'); };
  if (isInt(anyParameter)) { ArrNomeAbreviado.push('int'); ArrNomeCompleto.push('integer'); };
  if (isFlo(anyParameter)) { ArrNomeAbreviado.push('flo'); ArrNomeCompleto.push('float'); };
  if (isBig(anyParameter)) { ArrNomeAbreviado.push('big'); ArrNomeCompleto.push('bigint'); };
  if (isSym(anyParameter)) { ArrNomeAbreviado.push('sym'); ArrNomeCompleto.push('symbol'); };
  if (isArr(anyParameter)) { ArrNomeAbreviado.push('arr'); ArrNomeCompleto.push('array'); };
  if (isObj(anyParameter)) { ArrNomeAbreviado.push('obj'); ArrNomeCompleto.push('object'); };
  if (isIns(anyParameter)) { ArrNomeAbreviado.push('ins'); ArrNomeCompleto.push('instance'); };
  if (isPro(anyParameter)) { ArrNomeAbreviado.push('pro'); ArrNomeCompleto.push('promise'); };
  if (isFun(anyParameter)) { ArrNomeAbreviado.push('fun'); ArrNomeCompleto.push('function'); };
  if (isAsy(anyParameter)) { ArrNomeAbreviado.push('asy'); ArrNomeCompleto.push('async function'); };
  if (isCon(anyParameter)) { ArrNomeAbreviado.push('con'); ArrNomeCompleto.push('constructor function'); };
  if (isFac(anyParameter)) { ArrNomeAbreviado.push('fac'); ArrNomeCompleto.push('factory function'); };
  if (isCla(anyParameter)) { ArrNomeAbreviado.push('cla'); ArrNomeCompleto.push('class'); };
  if (ArrNomeAbreviado.length < 1) { ArrNomeAbreviado.push('-'); ArrNomeCompleto.push('-'); };
  ArrRetorno.push(ArrNomeAbreviado);
  ArrRetorno.push(ArrNomeCompleto);
  return ArrRetorno;
};

is_.name = funAllName;
is_.desc = funDesc;
is_.help = funHelp;

module.exports = is_;
