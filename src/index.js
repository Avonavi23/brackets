module.exports = function check(str, bracketsConfig) {
  const bracketsСhars = bracketsConfig
    .reduce((acc, item) => (acc += item), '')
    .split('')
    .filter((item) => item !== ',')
    .join('');
  
  const arrStr = str.split('');
  const stack = [];
  
  arrStr.forEach((char) => {
    const findedCharIndex = bracketsСhars.indexOf(char);
    const hasChar = findedCharIndex !== -1;
  
    if (!hasChar) {
      return false;
    }
  
    if (findedCharIndex % 2 > 0) {
      if (stack.length === 0) {
        return false;
      }
      
      const lastBracket = stack.pop();
      
      if (lastBracket !== bracketsСhars[findedCharIndex - 1]) {
        return false;
      }
    }
  
    if (findedCharIndex % 2 === 0) {
      stack.push(char);
    }
  })
  
  if (str[0] === '|') {
    return true;
  }
  
  return stack.length === 0;
}
  
