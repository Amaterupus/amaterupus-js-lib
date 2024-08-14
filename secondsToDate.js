// Importações:
const isStr = require('./isStr'); const isInt = require('./isInt'); const checkLeapYear = require('./checkLeapYear');

// Nome da função:
const funName = () => `secondsToDate`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intSecondsPassed) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna uma data referente aos segundos passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo integer e indica os segundos.

Exemplo de uso:
console.log(${funName()}(86400));

Exemplo de retorno:
{
  year: '0001',
  month: '01',
  day: '02',
  hour: '00',
  minute: '00',
  second: '00'
}

O retorno sempre será um object.`;

const secondsToDate = (intSecondsPassed) => {
  if (isStr(intSecondsPassed)) {
    intSecondsPassed = Number(intSecondsPassed);
  };
  if (!isInt(intSecondsPassed)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro '${intSecondsPassed}' não é do tipo integer.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };

  const IntSegundosDe400Anos = 12622780800;
  const IntSegundosDe1AnoBissexto = 31622400;
  const IntSegundosDe1AnoNaoBissexto = 31536000;
  const IntSegundosDe1Dia = 86400;
  const IntSegundosDe1Hora = 3600;
  const IntSegundosDe1Minuto = 60;
  let intAno = 1;
  let intMes = 1;
  let intDia = 1;
  let intHora = 0;
  let intMinutos = 0;
  let intSegundos = 0;
  let intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;

  while (intSecondsPassed >= IntSegundosDe400Anos) {
    intSecondsPassed -= IntSegundosDe400Anos;
    intAno += 400;
    intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;
  };

  while (intSecondsPassed >= intSegundosDoAnoAtual) {
    intSecondsPassed -= intSegundosDoAnoAtual;
    intAno++;
    intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;
  };

  const ArrDiasDosMeses = [31, checkLeapYear(intAno) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  while (intSecondsPassed >= (IntSegundosDe1Dia * ArrDiasDosMeses[intMes - 1])) {
    intSecondsPassed -= IntSegundosDe1Dia * ArrDiasDosMeses[intMes - 1];
    intMes++;
  };

  while (intSecondsPassed >= IntSegundosDe1Dia) {
    intSecondsPassed -= IntSegundosDe1Dia;
    intDia++;
  };

  while (intSecondsPassed >= IntSegundosDe1Hora) {
    intSecondsPassed -= IntSegundosDe1Hora;
    intHora++;
  };

  while (intSecondsPassed >= IntSegundosDe1Minuto) {
    intSecondsPassed -= IntSegundosDe1Minuto;
    intMinutos++;
  };

  intSegundos = intSecondsPassed;

  const ObjRetorno = {
    year: intAno.toString().padStart(4, '0'),
    month: intMes.toString().padStart(2, '0'),
    day: intDia.toString().padStart(2, '0'),
    hour: intHora.toString().padStart(2, '0'),
    minute: intMinutos.toString().padStart(2, '0'),
    second: intSegundos.toString().padStart(2, '0')
  };

  return ObjRetorno;
};

secondsToDate.nome = funAllName;
secondsToDate.desc = funDesc;
secondsToDate.help = funHelp;

module.exports = secondsToDate;
