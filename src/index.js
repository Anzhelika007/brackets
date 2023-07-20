module.exports = function check(str, bracketsConfig) {
  const count = Math.round(str.length / 2);
  const brackets = [];
  let new_str = str;

  for (let elem of bracketsConfig) {
    brackets.push(elem.join(''));
  }

  for (let i = 0; i <= count; i++) {
    if (new_str.length > 1 && new_str.length !== 0) {
      for (let bracet of brackets) {
        new_str = new_str.replaceAll(bracet, '');
      }
    }
  }

  if (new_str.length === 0) {
    return true;
  } else {
    return false;
  }
}

