// Calculator js script

/* TODO JS

multiple decimal : ne marche pas pour b si a contient déjà un point.
backspace to be implemented

*/

// VARIABLES
let oper = ['+', '-', '*', '/'];
let a = 0;
let b = 0;
let nbHisto = 0;

let operande = 0; //0 ou 1 pour savoir si on entre le 1er ou le 2eme membre de l'operation

let operateur = '+';
let longueur = 0; //permet de slicer a et b pour trouver la valeur de b

// touches autorisées : 
let touchesNum = ['0','1','2','3','4','5','6','7','8','9','.'];
let touchesOper = ['+','-','*','/','Enter'];
let touchesOption = ['Escape', 'Backspace'];


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
    if(!document.querySelector('.inpt').value.includes('.') || !Number.isInteger(a)) {
      document.querySelector('.inpt').value = document.querySelector('.inpt').value + nombre;
    }
  }
  else {
    document.querySelector('.inpt').value = document.querySelector('.inpt').value + nombre;
  }

}

function operation(operator) {
  if( (operande == 1) && (operator == '=') ) {
    operande = 2;
    b = parseFloat(document.querySelector('.inpt').value.slice(longueur));
    resultat = operate(operateur, a, b);
    document.querySelector('.inpt').value = resultat;
    //console.log(b);
    //console.log(resultat);
    //console.log(a + ' ' + operateur + ' ' + b + ' = ' + resultat);
    ajouteHisto(a + ' ' + operateur + ' ' + b + ' = ' + resultat);
  }
  else if( (operande == 0) && (operator != '=') ) {
    operande = 1;
    if(operator == 'x') {
      operateur = '*';
    }
    else operateur = operator;
    a = parseFloat(document.querySelector('.inpt').value);
    document.querySelector('.inpt').value = a + ' ' + operateur + ' ';
    longueur = document.querySelector('.inpt').value.length;
    //console.log(longueur);
    //console.log(a);
    //console.log(operateur);
  }
}

function setting(option) {
  if(option == 'AC') {
    a = 0;
    b = 0;
    operateur = '+';
    operande = 0;
    longueur = 0;
    document.querySelector('.inpt').value = 0;
  }
  else if(option == 'Backspace') {

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


// EVENT LISENERS

const keys = document.querySelector('.keys');
keys.addEventListener('click', (e) => {
  //btnClick(e.target.textContent);
  //btnClick(e.target.classList);
  btnClick(e.target);
});

document.addEventListener('keydown', (event) => {
  let nomTouche = event.key;
  console.log(nomTouche);
  if(touchesNum.includes(nomTouche)) {
    inputNb(nomTouche);
  }
  else if(touchesOper.includes(nomTouche)) {
    if(nomTouche == 'Enter') {
      nomTouche = '=';
    }
    else if(nomTouche == '*') {
      nomTouche = 'x';
    }
    operation(nomTouche);
  }
  else if(touchesOption.includes(nomTouche)) {
    if(nomTouche == 'Escape') {
      nomTouche = 'AC';
    }
    setting(nomTouche);
  }
});