// Calculator js script

function add(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return a+b;
  }
  else return 'Error';
}

function multiply(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return a*b;
  }
  else return 'Error';
}

let a = 3.2;
let b = 4;

console.log(a + ' + ' + b + ' = ' + add(a, b));
console.log(a + ' * ' + b + ' = ' + multiply(a, b));