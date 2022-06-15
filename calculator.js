function calculator(a, operation, b) {
  let result = 0;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if(b==0){
        result = 'can not divide by 0';
      }
      else {
        result = a / b;
      }
      break;
    default:
      break;
  }
  return result;
}

module.exports = calculator;