let displayNumber = '0';
let calcNumber=  0;
let previousOperator;
let previousButton;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        inputSymbol(value);
    }
    else{
        inputNumber(value);
    }
    screen.innerText = displayNumber;
}

function inputSymbol(symbol){
    if(symbol === 'AC'){
        displayNumber = '0';
        calcNumber = 0;
        previousOperator = null;
    }
    else if(symbol === '+/-'){
        if(displayNumber.indexOf('-') == -1){
            displayNumber = '-' + displayNumber;
        }else if(displayNumber.indexOf('-') !== -1){
            displayNumber = displayNumber.substring(1);
        }
    }
    else if(symbol === '.'){
        if(displayNumber.indexOf('.') !== -1){
            displayNumber += '.';
        }
    }
    else if(symbol ===  '%'){
        displayNumber = (parseFloat(displayNumber) * 0.01).toString();
    }
    else if(symbol === '='){
        solve(previousOperator);
        previousOperator = null;
        calcNumber = 0;
    }
    else if(symbol === 'x' || symbol === '/' || symbol === '-' || symbol === '+'){
        if(previousOperator !== null){
            solve(symbol);
        }
        previousOperator = symbol;
        previousButton = symbol;
    }
}

function inputNumber(number){
    if(displayNumber === '0'){
        displayNumber = number;
    }else if((displayNumber !== '0') && (previousButton === previousOperator)){
        calcNumber = parseFloat(displayNumber);
        displayNumber = number;
        previousButton = number;
    }else if((displayNumber !== '0') && (previousButton !== previousOperator)){
        displayNumber += number;
        previousButton = number;
    }
}

function solve(symbol){
    if(previousOperator === 'x'){
        calcNumber *= parseFloat(displayNumber);
    }
    else if(previousOperator === '/'){
        calcNumber /= parseFloat(displayNumber);
    }
    else if(previousOperator === '-'){
        calcNumber -= parseFloat(displayNumber);
    }
    else if(previousOperator === '+'){
        calcNumber += parseFloat(displayNumber);
    }
    displayNumber = calcNumber.toString(); 
}

function buttonPressed() {
    const buttons = document.querySelectorAll('.calc-buttons');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        });
    });
    console.log('hello');
}

buttonPressed();
