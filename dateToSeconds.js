// Importações:
const isObj = require('./isObj'); const isIns = require('./isIns'); const isStr = require('./isStr'); const isInt = require('./isInt'); const checkLeapYear = require('./checkLeapYear');

// Nome da função:
const funName = () => `dateToSeconds`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (objDateAndTime) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que retorna os segundos totais da data passada.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo object, indica a data e hora e deve seguir esses padrões:
A chave 'year' representa o ano;
A chave 'month' representa o mês;
A chave 'day' representa o dia;
A chave 'hour' representa a hora;
A chave 'minute' representa o minuto;
A chave 'second' representa o segundo.

Exemplo de uso:
console.log(${funName()}({ year: '0001', month: '01', day: '02', hour: '00', minute: '00', second: '00' }));

Exemplo de retorno:
86400

O retorno sempre será um integer.`;

const dateToSeconds = (objDateAndTime) => {
  const InsDataAgora = new Date();
  if (!!objDateAndTime && !isObj(objDateAndTime) && !isIns(objDateAndTime)) {
    console.error(`ERRO FUNÇÃO: ${funAllName()}`);
    console.error(`ERRO: O primeiro parâmetro '${objDateAndTime}' não é do tipo object.`);
    console.error(`ERRO: Use '${funName()}.help()' para detalhes.`);
    return null;
  };

  let arrDatasEHoras = [];
  const ObjDataEHoraDetalhada = {};
  if (!objDateAndTime || !objDateAndTime.year && !objDateAndTime.month && !objDateAndTime.day && !objDateAndTime.hour && !objDateAndTime.minute && !objDateAndTime.second) {
    ObjDataEHoraDetalhada.intAno = InsDataAgora.getFullYear();
    ObjDataEHoraDetalhada.intMes = InsDataAgora.getMonth() + 1;
    ObjDataEHoraDetalhada.intDia = InsDataAgora.getDate();
    ObjDataEHoraDetalhada.intHora = InsDataAgora.getHours();
    ObjDataEHoraDetalhada.intMinutos = InsDataAgora.getMinutes();
    ObjDataEHoraDetalhada.intSegundos = InsDataAgora.getSeconds();
  } else {
    arrDatasEHoras = [objDateAndTime.year, objDateAndTime.month, objDateAndTime.day, objDateAndTime.hour, objDateAndTime.minute, objDateAndTime.second];
    for (let i = 0; i < arrDatasEHoras.length; i++) {
      let anyDataOuHora = arrDatasEHoras[i];
      let strDado = '';
      switch (i) {
        case 0: strDado = 'intAno'; break;
        case 1: strDado = 'intMes'; break;
        case 2: strDado = 'intDia'; break;
        case 3: strDado = 'intHora'; break;
        case 4: strDado = 'intMinutos'; break;
        case 5: strDado = 'intSegundos'; break;
      };
      if (isStr(anyDataOuHora)) {
        anyDataOuHora = Number(anyDataOuHora);
        if (isInt(anyDataOuHora)) {
          ObjDataEHoraDetalhada[strDado] = anyDataOuHora;
        } else {
          if (i < 3) {
            ObjDataEHoraDetalhada[strDado] = 1;
          } else {
            ObjDataEHoraDetalhada[strDado] = 0;
          }
        };
      } else if (isInt(anyDataOuHora)) {
        ObjDataEHoraDetalhada[strDado] = anyDataOuHora
      } else {
        if (i < 3) {
          ObjDataEHoraDetalhada[strDado] = 1;
        } else {
          ObjDataEHoraDetalhada[strDado] = 0;
        }
      };
    };
  };

  let intSegundosRetorno = 0;
  const IntSegundosDe400Anos = 12622780800;
  const IntSegundosDe1AnoBissexto = 31622400;
  const IntSegundosDe1AnoNaoBissexto = 31536000;
  const IntSegundosDe1Dia = 86400;
  const IntSegundosDe1Hora = 3600;

  let intAno = ObjDataEHoraDetalhada.intAno;
  while (intAno >= 400) {
    intAno -= 400;
    intSegundosRetorno += IntSegundosDe400Anos;
  };

  for (let i = 1; i < intAno; i++) {
    if (checkLeapYear(i)) {
      intSegundosRetorno += IntSegundosDe1AnoBissexto;
    } else {
      intSegundosRetorno += IntSegundosDe1AnoNaoBissexto;
    };
  };

  const ArrDiasDosMeses = [31, checkLeapYear(ObjDataEHoraDetalhada.intAno) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < ObjDataEHoraDetalhada.intMes; i++) {
    intSegundosRetorno += ArrDiasDosMeses[i - 1] * IntSegundosDe1Dia;
  };

  if (ObjDataEHoraDetalhada.intDia > 1) {
    intSegundosRetorno += (ObjDataEHoraDetalhada.intDia - 1) * IntSegundosDe1Dia;
  };

  if (ObjDataEHoraDetalhada.intHora > 0) {
    intSegundosRetorno += ObjDataEHoraDetalhada.intHora * IntSegundosDe1Hora;
  };

  if (ObjDataEHoraDetalhada.intMinutos > 0) {
    intSegundosRetorno += ObjDataEHoraDetalhada.intMinutos * 60;
  };

  if (ObjDataEHoraDetalhada.intSegundos > 0) {
    intSegundosRetorno += ObjDataEHoraDetalhada.intSegundos;
  };

  return intSegundosRetorno;
};

dateToSeconds.nome = funAllName;
dateToSeconds.desc = funDesc;
dateToSeconds.help = funHelp;

module.exports = dateToSeconds;
