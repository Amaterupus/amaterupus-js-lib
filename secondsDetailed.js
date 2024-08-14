// Importações:
const isStr = require('./isStr'); const isInt = require('./isInt');

// Nome da função:
const funName = () => `secondsDetailed`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intSecondsPassed) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna a quantidade de anos, meses, dias, horas, minutos e segundos referente aos segundos passados.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é obrigatório, deve ser do tipo integer e indica os segundos.

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
  exactYears: 0,
  exactMonths: 0,
  exactDays: 365,
  exactHours: 0,
  exactMinutes: 0,
  exactSeconds: 0
}

O retorno sempre será um objeto.`;

const secondsDetailed = (intSecondsPassed) => {
  if (isStr(intSecondsPassed)) {
    intSecondsPassed = Number(intSecondsPassed);
  };
  if (!isInt(intSecondsPassed)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro '${intSecondsPassed}' não é do tipo integer.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return { null: null };
  };

  let intSegundosPassadoCopia = intSecondsPassed;

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

  while (intSecondsPassed >= IntSegundosDe400Anos) {
    intSecondsPassed -= IntSegundosDe400Anos;
    intMediaAnos += 400;
  };

  while (intSecondsPassed >= IntMediaSegundosDe1Ano) {
    intSecondsPassed -= IntMediaSegundosDe1Ano;
    intMediaAnos++;
  };

  while (intSecondsPassed >= IntMediaSegundosDe1Mes) {
    intSecondsPassed -= IntMediaSegundosDe1Mes;
    intMediaMeses++;
  };

  while (intSecondsPassed >= IntSegundosDe1Dia) {
    intSecondsPassed -= IntSegundosDe1Dia;
    intMediaDias++;
  };

  while (intSecondsPassed >= IntSegundosDe1Hora) {
    intSecondsPassed -= IntSegundosDe1Hora;
    intMediaHoras++;
  };

  while (intSecondsPassed >= IntSegundosDe1Minuto) {
    intSecondsPassed -= IntSegundosDe1Minuto;
    intMediaMinutos++;
  };

  intMediaSegundos = intSecondsPassed;

  let intExatoAnos = 0;
  let intExatoDias = 0;
  let intExatoHoras = 0;
  let intExatoMinutos = 0;
  let intExatoSegundos = 0;

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

  intExatoSegundos = intSegundosPassadoCopia;

  const ObjRetorno = {};
  ObjRetorno.averageYears = intMediaAnos;
  ObjRetorno.averageMonths = Number(intMediaMeses.toFixed(0));
  ObjRetorno.averageDays = Number(intMediaDias.toFixed(0));
  ObjRetorno.averageHours = Number(intMediaHoras.toFixed(0));
  ObjRetorno.averageMinutes = Number(intMediaMinutos.toFixed(0));
  ObjRetorno.averageSeconds = Number(intMediaSegundos.toFixed(0));
  ObjRetorno.exactYears = intExatoAnos;
  ObjRetorno.exactMonths = 0;
  ObjRetorno.exactDays = intExatoDias;
  ObjRetorno.exactHours = intExatoHoras;
  ObjRetorno.exactMinutes = intExatoMinutos;
  ObjRetorno.exactSeconds = intExatoSegundos;

  return ObjRetorno;
};

secondsDetailed.nome = funAllName;
secondsDetailed.desc = funDesc;
secondsDetailed.help = funHelp;

module.exports = secondsDetailed;
