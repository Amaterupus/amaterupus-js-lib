// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum');

// Nome da função:
const funName = () => `ruleOfThree`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality = 'dir') => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que calcula a regra de três com as grandezas diretamente ou inversamente proporcionais.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo number e indica o primeiro número da primeira grandeza.
- O segundo parâmetro é obrigatório, deve ser do tipo number e indica o primeiro número da segunda grandeza.
- O terceiro parâmetro é opcional, deve ser do tipo number e indica o segundo número da primeira grandeza.
- O quarto parâmetro é opcional, deve ser do tipo number e indica o segundo número da segunda grandeza.
- O quinto parâmetro é opcional, deve ser do tipo string, indica se a regra de três vai ser diretamente ou inversamente proporcional e deve seguir algum desses padrões:
'dir' para diretamente proporcional;
'inv' para inversamente proporcional.

Exemplo de uso:
${funName()}(2, 5, 4);

Exemplo de retorno:
10

O retorno sempre será um number.`;

/**
 * Função que calcula a regra de três com as grandezas diretamente ou inversamente proporcionais.
 * 
 * @param {number} numFirstQuantity1 Obrigatório (number). Indica o primeiro número da primeira grandeza.
 * @param {number} numSecondQuantity1 Obrigatório (number). Indica o primeiro número da segunda grandeza.
 * @param {number} [numFirstQuantity2] Opcional (number). Indica o segundo número da primeira grandeza.
 * @param {number} [numSecondQuantity2] Opcional (number). Indica o segundo número da segunda grandeza.
 * @param {string} [strProportionality] Opcional (string). Indica se a regra de três vai ser diretamente ou inversamente proporcional e deve seguir algum desses padrões:
 *   - 'dir' para diretamente proporcional;
 *   - 'inv' para inversamente proporcional.
 * @returns {number} Number.
 * 
 * @example
 * ruleOfThree(2, 5, 4);
 * // Retorno:
 * // 10
 */
const ruleOfThree = (numFirstQuantity1, numSecondQuantity1, numFirstQuantity2, numSecondQuantity2, strProportionality = 'dir') => {
  if (isStr(numFirstQuantity1)) {
    numFirstQuantity1 = Number(numFirstQuantity1);
  };
  if (isStr(numSecondQuantity1)) {
    numSecondQuantity1 = Number(numSecondQuantity1);
  };
  if (!isNum(numFirstQuantity1) || !isNum(numSecondQuantity1)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: Há algum problema com o primeiro ou segundo parâmetro ('${numFirstQuantity1}' não é do tipo number OU '${numSecondQuantity1}' não é do tipo number).`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };
  if (isStr(numFirstQuantity2)) {
    numFirstQuantity2 = Number(numFirstQuantity2);
  };
  if (isStr(numSecondQuantity2)) {
    numSecondQuantity2 = Number(numSecondQuantity2);
  };
  if (!isNum(numFirstQuantity2) && !isNum(numSecondQuantity2)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: Há algum problema com o terceiro ou quarto parâmetro ('${numFirstQuantity2}' não é do tipo number E '${numSecondQuantity2}' não é do tipo number).`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };
  if (isStr(strProportionality)) {
    strProportionality = strProportionality.toLowerCase();
    if (strProportionality !== 'dir' && strProportionality !== 'inv') {
      strProportionality = 'dir';
    };
  } else {
    strProportionality = 'dir';
  };
  if (strProportionality === 'dir') {
    if (!!numFirstQuantity2 && numFirstQuantity2 !== 0) {
      return (numSecondQuantity1 * numFirstQuantity2) / numFirstQuantity1;
    } else {
      return (numFirstQuantity1 * numSecondQuantity2) / numSecondQuantity1;
    };
  } else {
    if (!!numFirstQuantity2 && numFirstQuantity2 !== 0) {
      return (numFirstQuantity1 * numSecondQuantity1) / numFirstQuantity2;
    } else {
      return (numFirstQuantity1 * numSecondQuantity1) / numSecondQuantity2;
    };
  };
};

ruleOfThree.name = funAllName;
ruleOfThree.desc = funDesc;
ruleOfThree.help = funHelp;

module.exports = ruleOfThree;
