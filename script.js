let displayNumber = '0';
let calcNumber = 0;
let previousOperator;
let previousButton;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        inputSymbol(value);
    }else{
        inputNumber(value);
    }
    screen.innerText = displayNumber;
}

function inputSymbol(symbol){
        if(symbol === 'AC'){
            displayNumber = '0';
        }
        else if(symbol === '+/-'){
            if(displayNumber.indexOf('-') !== -1){
                displayNumber.slice(1);
            }
            else{
                displayNumber += '-' + displayNumber;
            }
        }
        else if(symbol === '='){
            if(previousOperator === null){
                return;
            }
            else{
                solve(parseInt(displayNumber))
                previousOperator = null;
                displayNumber = calcNumber;
                calcNumber = 0;
            }
        }
        else if(symbol === 'x' || symbol === '/' || symbol === '-' || symbol === '+'){
            calculate(symbol);
            return;
        }
}

function inputNumber(number){
    if(displayNumber === '0'){
        displayNumber = number;
    }
    else{
        displayNumber += number;
    }
}

function calculate(symbol){
    if(displayNumber === '0'){
        return;
    }

    const intDisplayNumber = parseInt(displayNumber);

    if(calcNumber === 0){
        calcNumber = intDisplayNumber;
    }
    else{
        solve(intDisplayNumber);
    }
    previousButton = symbol;
    displayNumber = '0';
}

function solve(intDisplayNumber){
    if(previousOperator === 'x'){
        intDisplayNumber *= calcNumber;
    }
    else if(previousOperator === '/'){
        intDisplayNumber /= calcNumber;
    }
    else if(previousOperator === '+'){
        intDisplayNumber += calcNumber;
    }
    else if(previousOperator === '-'){
        intDisplayNumber -= calcNumber;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();


