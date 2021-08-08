const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

  const makeLetterMorse = (letterBinary) => {
    const arr = letterBinary.match(/.{1,2}/g);
    let letterMorse = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '11') {
        letterMorse += '-';
      } else if (arr[i] === '10') {
        letterMorse += '.';
      }
    }

    return letterMorse;
  }

  let resStr = '';

  for (let i = 0; i < expr.length; i += 10) {
    const letterCut = expr.slice(i, i + 10);

    if (letterCut === '**********') {
      resStr += ' ';
    } else {
      const letter = makeLetterMorse(letterCut);
      resStr += MORSE_TABLE[letter];
    }
  }

  return resStr;
}

module.exports = {
    decode
}