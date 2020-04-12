// Calculator js script

/* TODO JS

l'historique dépasse ud conteneur
il faudrait un compteur d'historique pour supprimer les plus vieux paragraphes de l'histo

*/

// VARIABLES
let oper = ['+', '-', '*', '/'];
let a = 0;
let b = 0;
let nbHisto = 0;

let operande = 0; //0 ou 1 pour savoir si on entre le 1er ou le 2eme membre de l'operation

let operateur = '+';

// FONCTIONS
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
  if(oper.includes(operator) && typeof(a)=='number' && typeof(b)=='number') {
    switch(operator) {
      case '+':
        return add(a, b);
      case '-':
        return substract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
    }
  }
}


// MAIN

/*console.log(a + ' + ' + b + ' = ' + operate('+', a, b));
console.log(a + ' - ' + b + ' = ' + operate('-', a, b));
console.log(a + ' * ' + b + ' = ' + operate('*', a, b));
console.log(a + ' / ' + b + ' = ' + operate('/', a, b));*/

function btnClick(bouton) {
  console.log(bouton.textContent);
  let btnClass = Array.from(bouton.classList);

  if(btnClass.includes('num')) {
    //console.log('num');
    inputNb(bouton.textContent);
  }
  else if (btnClass.includes('oper')) {
    //console.log('oper');
    operation(bouton.textContent);
  }
  else if (btnClass.includes('option')) {
    //console.log('option');
    setting(bouton.textContent);
  }
}

function inputNb(nombre) {
  if(document.querySelector('.inpt').value == 0) {
    document.querySelector('.inpt').value = nombre;
  }
  else if(nombre == '.') {
    if(!document.querySelector('.inpt').value.includes('.')) {
      document.querySelector('.inpt').value = document.querySelector('.inpt').value + nombre;
    }
  }
  else {
    document.querySelector('.inpt').value = document.querySelector('.inpt').value + nombre;
  }

}

function operation(operator) {
  if( (operande == 1) && (operator == '=') ) {
    b = parseFloat(document.querySelector('.inpt').value);
    resultat = operate(operateur, a, b);
    document.querySelector('.inpt').value = resultat;
    console.log(b);
    console.log(resultat);
    console.log(a + ' ' + operateur + ' ' + b + ' = ' + resultat);
    ajouteHisto(a + ' ' + operateur + ' ' + b + ' = ' + resultat);
  }
  else if( (operande == 0) && (operator != '=') ) {
    operande = 1;
    if(operator == 'x') {
      operateur = '*';
    }
    else operateur = operator;
    a = parseFloat(document.querySelector('.inpt').value);
    document.querySelector('.inpt').value = 0;
    console.log(a);
    console.log(operateur);
  }
}

function setting(option) {
  if(option == 'AC') {
    a = 0;
    b = 0;
    operateur = '+';
    operande = 0;
    document.querySelector('.inpt').value = 0;
  }
}

function ajouteHisto(uneOperation) {
  const historique = document.querySelector('.histo');
  const para = document.createElement('p');
  para.setAttribute('class', 'hist');
  para.textContent = uneOperation;
  historique.appendChild(para);
  nbHisto ++;
  if(nbHisto > 6) {
    const remove = document.querySelectorAll('.hist');
    remove[0].remove();
    
    
  }
}

const keys = document.querySelector('.keys');
keys.addEventListener('click', (e) => {
  //btnClick(e.target.textContent);
  //btnClick(e.target.classList);
  btnClick(e.target);
});
