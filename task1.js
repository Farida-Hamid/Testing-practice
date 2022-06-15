function task1(str) {
  if(str.length < 1){
    return 'the list is empty';
  }
  else if(str.length >10) {
    return 'The string is too large';
  }
  else {
    return str.length;
  }
}

module.exports = task1;
