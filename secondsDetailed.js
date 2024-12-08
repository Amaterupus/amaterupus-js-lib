// Importações:
const isStr = require('./isStr'); const isNum = require('./isNum'); const isFlo = require('./isFlo');

// Nome da função:
const funName = () => `secondsDetailed`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (numSecondsPassed, booSecondsBasedOnDate = false) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna a quantidade de anos, meses, dias, horas, minutos e segundos referente aos segundos passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo number e indica os segundos.
- O segundo parâmetro é opcional, deve ser do tipo boolean e indica se os segundos passados estão no formato do 'Date.now() / 1000'.

Exemplo de uso:
console.log(${funName()}(31536000));

Exemplo de retorno:
{
  averageYears: 0,
  averageMonths: 11,
  averageDays: 30,
  averageHours: 4,
  averageMinutes: 39,
  averageSeconds: 54,
  averageMilliseconds: 0,
  exactYears: 0,
  exactMonths: 0,
  exactDays: 365,
  exactHours: 0,
  exactMinutes: 0,
  exactSeconds: 0,
  exactMilliseconds: 0
}

O retorno sempre será um objeto.`;

const secondsDetailed = (numSecondsPassed, booSecondsBasedOnDate = false) => {
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

  let intSegundosPassadoCopia = numSecondsPassed;

  const IntSegundosDe400Anos = 12622780800;
  const IntMediaSegundosDe1Ano = 31556952;
  const IntMediaSegundosDe1Mes = 2629746;
  const IntSegundosDe1Dia = 86400;
  const IntSegundosDe1Hora = 3600;
  const IntSegundosDe1Minuto = 60;

  let intMediaAnos = 0;
  let intMediaMeses = 0;
  let intMediaDias = 0;
  let intMediaHoras = 0;
  let intMediaMinutos = 0;
  let intMediaSegundos = 0;
  let intMediaMilissegundos = 0;

  while (numSecondsPassed >= IntSegundosDe400Anos) {
    numSecondsPassed -= IntSegundosDe400Anos;
    intMediaAnos += 400;
  };

  while (numSecondsPassed >= IntMediaSegundosDe1Ano) {
    numSecondsPassed -= IntMediaSegundosDe1Ano;
    intMediaAnos++;
  };

  while (numSecondsPassed >= IntMediaSegundosDe1Mes) {
    numSecondsPassed -= IntMediaSegundosDe1Mes;
    intMediaMeses++;
  };

  while (numSecondsPassed >= IntSegundosDe1Dia) {
    numSecondsPassed -= IntSegundosDe1Dia;
    intMediaDias++;
  };

  while (numSecondsPassed >= IntSegundosDe1Hora) {
    numSecondsPassed -= IntSegundosDe1Hora;
    intMediaHoras++;
  };

  while (numSecondsPassed >= IntSegundosDe1Minuto) {
    numSecondsPassed -= IntSegundosDe1Minuto;
    intMediaMinutos++;
  };

  if (isFlo(numSecondsPassed)) {
    const ArrSegundosEMilissegundos = numSecondsPassed.toString().split('.');
    intMediaSegundos = Number(ArrSegundosEMilissegundos[0]);
    intMediaMilissegundos = Number((Number(ArrSegundosEMilissegundos[1].slice(0, 4)) / 10).toFixed());
  } else {
    intMediaSegundos = numSecondsPassed;
  };

  let intExatoAnos = 0;
  let intExatoDias = 0;
  let intExatoHoras = 0;
  let intExatoMinutos = 0;
  let intExatoSegundos = 0;
  let intExatoMilissegundos = 0;

  while (intSegundosPassadoCopia >= IntSegundosDe400Anos) {
    intSegundosPassadoCopia -= IntSegundosDe400Anos;
    intExatoAnos += 400;
  };

  while (intSegundosPassadoCopia >= IntSegundosDe1Dia) {
    intSegundosPassadoCopia -= IntSegundosDe1Dia;
    intExatoDias++;
  };

  while (intSegundosPassadoCopia >= IntSegundosDe1Hora) {
    intSegundosPassadoCopia -= IntSegundosDe1Hora;
    intExatoHoras++;
  };

  while (intSegundosPassadoCopia >= IntSegundosDe1Minuto) {
    intSegundosPassadoCopia -= IntSegundosDe1Minuto;
    intExatoMinutos++;
  };

  if (isFlo(intSegundosPassadoCopia)) {
    const ArrSegundosEMilissegundos = intSegundosPassadoCopia.toString().split('.');
    intExatoSegundos = Number(ArrSegundosEMilissegundos[0]);
    intExatoMilissegundos = Number((Number(ArrSegundosEMilissegundos[1].slice(0, 4)) / 10).toFixed());
  } else {
    intExatoSegundos = intSegundosPassadoCopia;
  };

  const ObjRetorno = {};
  ObjRetorno.averageYears = intMediaAnos;
  ObjRetorno.averageMonths = intMediaMeses;
  ObjRetorno.averageDays = intMediaDias;
  ObjRetorno.averageHours = intMediaHoras;
  ObjRetorno.averageMinutes = intMediaMinutos;
  ObjRetorno.averageSeconds = intMediaSegundos;
  ObjRetorno.averageMilliseconds = intMediaMilissegundos;
  ObjRetorno.exactYears = intExatoAnos;
  ObjRetorno.exactMonths = 0;
  ObjRetorno.exactDays = intExatoDias;
  ObjRetorno.exactHours = intExatoHoras;
  ObjRetorno.exactMinutes = intExatoMinutos;
  ObjRetorno.exactSeconds = intExatoSegundos;
  ObjRetorno.exactMilliseconds = intExatoMilissegundos;

  return ObjRetorno;
};

secondsDetailed.name = funAllName;
secondsDetailed.desc = funDesc;
secondsDetailed.help = funHelp;

module.exports = secondsDetailed;
