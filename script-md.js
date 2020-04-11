// Calculator js script

function add(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return Math.round((a+b)*1000)/1000;
  }
  //else return 'Error';
}

function substract(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return Math.round((a-b)*1000)/1000;
  }
  //else return 'Error';
}

function multiply(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return Math.round((a*b)*1000)/1000;
  }
  //else return 'Error';
}

function divide(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return Math.round((a/b)*1000)/1000;
  }
  //else return 'Error';
}

function operate(operator, a, b) {
  //takes an operator and 2 numbres and calls the right operation function
  
}

let a = 'toto';
let b = 3;

console.log(a + ' + ' + b + ' = ' + add(a, b));
console.log(a + ' - ' + b + ' = ' + substract(a, b));
console.log(a + ' * ' + b + ' = ' + multiply(a, b));
console.log(a + ' / ' + b + ' = ' + divide(a, b));