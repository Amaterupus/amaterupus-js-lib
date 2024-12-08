// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const checkLeapYear = require('./checkLeapYear'); const isFlo = require('./isFlo');

// Nome da função:
const funName = () => `secondsToDate`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (numSecondsPassed, booSecondsBasedOnDate = false) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna uma data referente aos segundos passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo number e indica os segundos.
- O segundo parâmetro é opcional, deve ser do tipo boolean e indica se os segundos passados estão no formato do 'Date.now() / 1000'.

Exemplo de uso:
console.log(${funName()}(86400));

Exemplo de retorno:
{
  year: '0001',
  month: '01',
  day: '02',
  hour: '00',
  minute: '00',
  second: '00',
  millisecond: '000'
}

O retorno sempre será um object.`;

const secondsToDate = (numSecondsPassed, booSecondsBasedOnDate = false) => {
  if (isStr(numSecondsPassed)) {
    numSecondsPassed = Number(numSecondsPassed);
  };
  if (!isNum(numSecondsPassed)) {
    booSecondsBasedOnDate = false;
    numSecondsPassed = Date.now() / 1000 + 62135586000;
  };

  if (booSecondsBasedOnDate) {
    numSecondsPassed += 62135586000;
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
  let intMillisecond = 0;
  let intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;

  while (numSecondsPassed >= IntSegundosDe400Anos) {
    numSecondsPassed -= IntSegundosDe400Anos;
    intAno += 400;
    intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;
  };

  while (numSecondsPassed >= intSegundosDoAnoAtual) {
    numSecondsPassed -= intSegundosDoAnoAtual;
    intAno++;
    intSegundosDoAnoAtual = checkLeapYear(intAno) ? IntSegundosDe1AnoBissexto : IntSegundosDe1AnoNaoBissexto;
  };

  const ArrDiasDosMeses = [31, checkLeapYear(intAno) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  while (numSecondsPassed >= (IntSegundosDe1Dia * ArrDiasDosMeses[intMes - 1])) {
    numSecondsPassed -= IntSegundosDe1Dia * ArrDiasDosMeses[intMes - 1];
    intMes++;
  };

  while (numSecondsPassed >= IntSegundosDe1Dia) {
    numSecondsPassed -= IntSegundosDe1Dia;
    intDia++;
  };

  while (numSecondsPassed >= IntSegundosDe1Hora) {
    numSecondsPassed -= IntSegundosDe1Hora;
    intHora++;
  };

  while (numSecondsPassed >= IntSegundosDe1Minuto) {
    numSecondsPassed -= IntSegundosDe1Minuto;
    intMinutos++;
  };

  if (isFlo(numSecondsPassed)) {
    const ArrSegundosEMilissegundos = numSecondsPassed.toString().split('.');
    intSegundos = ArrSegundosEMilissegundos[0];
    intMillisecond = (Number(ArrSegundosEMilissegundos[1].slice(0, 4)) / 10).toFixed();
  } else {
    intSegundos = numSecondsPassed.toString();
  };

  const ObjRetorno = {
    year: intAno.toString().padStart(4, '0'),
    month: intMes.toString().padStart(2, '0'),
    day: intDia.toString().padStart(2, '0'),
    hour: intHora.toString().padStart(2, '0'),
    minute: intMinutos.toString().padStart(2, '0'),
    second: intSegundos.padStart(2, '0'),
    millisecond: intMillisecond.toString().padStart(3, '0')
  };

  return ObjRetorno;
};

secondsToDate.name = funAllName;
secondsToDate.desc = funDesc;
secondsToDate.help = funHelp;

module.exports = secondsToDate;
