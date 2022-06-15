function cap(str){
  if(isNaN(str[0])) {
    let cap = str.charAt(0).toUpperCase();
    return cap + str.slice(1);
  }
  else {
    return 'Can not capitalize a number';
  }
}

console.log(isNaN('italy'));

module.exports = cap;