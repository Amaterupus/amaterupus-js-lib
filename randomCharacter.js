// Importações:
const isStr = require('./isStr'); const isInt = require('./isInt'); const randomBetweenNumbers = require('./randomBetweenNumbers');

// Nome da função:
const funName = () => `randomCharacter`;

// Nome completo da função:
const funAllName = () => `const ${funName()} = (intCharacterType = 0, intLetterType = 0) => {...};`;

// Descrição da função:
const funDesc = () => `--- Função que escolhe aleatoriamente um caractere, podendo ser um número, uma letra ou um símbolo.`;

// Ajuda da função:
const funHelp = () => `${funDesc()}

${funAllName()}

- O primeiro parâmetro é opcional, deve ser do tipo integer, indica o tipo de caractere e deve seguir algum desses padrões:
'0' para caractere aleatório podendo ser número, letra ou símbolo;
'1' para caractere aleatório podendo ser apenas número;
'2' para caractere aleatório podendo ser apenas letra;
'3' para caractere aleatório podendo ser apenas símbolo;
'4' para caractere aleatório podendo ser número ou letra;
'5' para caractere aleatório podendo ser número ou símbolo;
'6' para caractere aleatório podendo ser letra ou símbolo.
- O segundo parâmetro é opcional, deve ser do tipo integer, indica o tipo de letra e deve seguir algum desses padrões:
'0' para letra aleatória podendo ser minúscula ou maiúscula;
'1' para letra aleatória podendo ser minúscula;
'2' para letra aleatória podendo ser maiúscula.

Exemplo de uso:
console.log(${funName()}(2, 1))

Exemplo de retorno:
n

O retorno sempre será uma string.`;

const randomCharacter = (intCharacterType = 0, intLetterType = 0) => {
  if (isStr(intCharacterType)) {
    intCharacterType = Number(intCharacterType);
  };
  if (isStr(intLetterType)) {
    intLetterType = Number(intLetterType);
  };
  if (!isInt(intCharacterType) || intCharacterType < 0 || intCharacterType > 6) {
    intCharacterType = 0;
  };
  if (!isInt(intLetterType) || intLetterType < 0 || intLetterType > 2) {
    intLetterType = 0;
  };

  const funRetornarCaractere = (intNumero) => {
    switch (intNumero) {
      case 0: return `0`; case 1: return `1`; case 2: return `2`; case 3: return `3`; case 4: return `4`; case 5: return `5`; case 6: return `6`; case 7: return `7`; case 8: return `8`; case 9: return `9`; case 10: return `a`; case 11: return `b`; case 12: return `c`; case 13: return `d`; case 14: return `e`; case 15: return `f`; case 16: return `g`; case 17: return `h`; case 18: return `i`; case 19: return `j`; case 20: return `k`; case 21: return `l`; case 22: return `m`; case 23: return `n`; case 24: return `o`; case 25: return `p`; case 26: return `q`; case 27: return `r`; case 28: return `s`; case 29: return `t`; case 30: return `u`; case 31: return `v`; case 32: return `w`; case 33: return `x`; case 34: return `y`; case 35: return `z`; case 36: return `A`; case 37: return `B`; case 38: return `C`; case 39: return `D`; case 40: return `E`; case 41: return `F`; case 42: return `G`; case 43: return `H`; case 44: return `I`; case 45: return `J`; case 46: return `K`; case 47: return `L`; case 48: return `M`; case 49: return `N`; case 50: return `O`; case 51: return `P`; case 52: return `Q`; case 53: return `R`; case 54: return `S`; case 55: return `T`; case 56: return `U`; case 57: return `V`; case 58: return `W`; case 59: return `X`; case 60: return `Y`; case 61: return `Z`; case 62: return `!`; case 63: return `#`; case 64: return `$`; case 65: return `%`; case 66: return `&`; case 67: return `(`; case 68: return `)`; case 69: return `*`; case 70: return `+`; case 71: return `,`; case 72: return `-`; case 73: return `.`; case 74: return `/`; case 75: return `:`; case 76: return `;`; case 77: return `<`; case 78: return `=`; case 79: return `>`; case 80: return `?`; case 81: return `@`; case 82: return `[`; case 83: return `]`; case 84: return `^`; case 85: return `_`; case 86: return `{`; case 87: return `|`; case 88: return `}`; case 89: return `~`; case 90: return `¡`; case 91: return `¢`; case 92: return `£`; case 93: return `§`; case 94: return `¨`; case 95: return `©`; case 96: return `ª`; case 97: return `¬`; case 98: return `®`; case 99: return `°`; case 100: return `±`; case 101: return `²`; case 102: return `³`; case 103: return `´`; case 104: return `¶`; case 105: return `¹`; case 106: return `º`; case 107: return `¼`; case 108: return `½`; case 109: return `¾`; case 110: return `¿`; case 111: return `À`; case 112: return `Á`; case 113: return `Â`; case 114: return `Ã`; case 115: return `Ä`; case 116: return `Ç`; case 117: return `È`; case 118: return `É`; case 119: return `Ê`; case 120: return `Ë`; case 121: return `Ì`; case 122: return `Í`; case 123: return `Î`; case 124: return `Ï`; case 125: return `Ñ`; case 126: return `Ò`; case 127: return `Ó`; case 128: return `Ô`; case 129: return `Õ`; case 130: return `Ö`; case 131: return `Ø`; case 132: return `Ù`; case 133: return `Ú`; case 134: return `Û`; case 135: return `Ü`; case 136: return `Ý`; case 137: return `ß`; case 138: return `à`; case 139: return `á`; case 140: return `â`; case 141: return `ã`; case 142: return `ä`; case 143: return `ç`; case 144: return `è`; case 145: return `é`; case 146: return `ê`; case 147: return `ë`; case 148: return `ì`; case 149: return `í`; case 150: return `î`; case 151: return `ï`; case 152: return `ñ`; case 153: return `ò`; case 154: return `ó`; case 155: return `ô`; case 156: return `õ`; case 157: return `ö`; case 158: return `÷`; case 159: return `ù`; case 160: return `ú`; case 161: return `û`; case 162: return `ü`; case 163: return `ý`; case 164: return `ÿ`; case 165: return `Ÿ`; case 166: return `ƒ`; case 167: return `Δ`; case 168: return `μ`;
    };
  };

  const funVerificarMaiusculaOuMinuscula = (intLetterType) => {
    switch (intLetterType) {
      case 0: return [10, 61];
      case 1: return [10, 35];
      case 2: return [36, 61];
    };
  };

  const ArrNumero = [0, 9];
  const ArrLetra = funVerificarMaiusculaOuMinuscula(intLetterType);
  const ArrSimbolo = [62, 168];

  switch (intCharacterType) {
    case 0: return funRetornarCaractere(randomBetweenNumbers('int', ArrNumero, ArrLetra, ArrSimbolo));
    case 1: return funRetornarCaractere(randomBetweenNumbers('int', ArrNumero));
    case 2: return funRetornarCaractere(randomBetweenNumbers('int', ArrLetra));
    case 3: return funRetornarCaractere(randomBetweenNumbers('int', ArrSimbolo));
    case 4: return funRetornarCaractere(randomBetweenNumbers('int', ArrNumero, ArrLetra));
    case 5: return funRetornarCaractere(randomBetweenNumbers('int', ArrNumero, ArrSimbolo));
    case 6: return funRetornarCaractere(randomBetweenNumbers('int', ArrLetra, ArrSimbolo));
  };
};

randomCharacter.name = funAllName;
randomCharacter.desc = funDesc;
randomCharacter.help = funHelp;

module.exports = randomCharacter;
