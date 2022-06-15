function reverseString(str) {
  let rev = '';
  for(let i = str.length-1; i >= 0; i--){
    rev += str[i];
  }
  return rev;
}

module.exports = reverseString;