const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const operator = document.querySelector(".operator")
const container = document.querySelector(".container");
let totalSum = 0;
let flag = false;


container.addEventListener("click", (event) => {
    const btn = event.target.innerHTML;
    btn === "+" || btn === "-" || btn === "*" || btn === "/" ? calculatorButtons.mathButton(btn) : btn === "=" ?
    calculatorButtons.equalButton() : btn === "C" ? calculatorButtons.clearButton() : calculatorButtons.numberButton(Number(btn));
    // switch(btn){
    //     case "+":
    //         calculatorButtons.mathButton(btn);
    //         break;
    //     case "-":
    //         calculatorButtons.mathButton(btn);
    //         break;
    //     case "*":
    //         calculatorButtons.mathButton(btn);
    //         break;
    //     case "/":
    //         calculatorButtons.mathButton(btn);
    //         break;
    //     case "=":
    //         calculatorButtons.equalButton();
    //         break;
    //     case "C":
    //         calculatorButtons.clearButton();
    //     default:
    //         calculatorButtons.numberButton(Number(btn));
    // }
})

const calculatorButtons = function() {
    const numberButton = function(num){
        if(flag) secondNumber.innerHTML += num;
        else firstNumber.innerHTML += num;
        
        if(num === 0 && firstNumber.innerHTML > 0 && Number(secondNumber.innerHTML) === 0) {
            secondNumber.innerHTML = "";
            alert("Can't divide by 0!!!")
        }
    }
    const mathButton = function(e){
        if(Number(firstNumber.innerHTML) > 0){
            operator.innerHTML = e;
        }
        else {
            calculatorButtons.clearButton();
            alert("Add a value first!!!");
        }

        
        if(flag) getTotalSum();
        flag = true;
    }
    const equalButton = function(){
        if(!flag) alert("Error")
        
        else {
            getTotalSum();
            operator.innerHTML = "";
        }
    }
    const clearButton = function(){
        totalSum = 0;
        flag = false;
        firstNumber.innerHTML = "";
    }
    return {numberButton, mathButton, equalButton, clearButton}
}();

const calculator = function () {
    const add = (num, secNum) => num + secNum;
    const subtract = (num, secNum) => num - secNum;
    const multiply = (num, secNum) => num * secNum;
    const divide = (num, secNum) => num / secNum;

    return {add, subtract, multiply, divide};
}();

function operate (num, secNum, operator) {
    if(operator === "+"){
        return calculator.add(num, secNum);
    }
    if(operator === "-"){
        return calculator.subtract(num, secNum);
    }
    if(operator === "*"){
        return calculator.multiply(num, secNum);
    }
    if(operator === "/"){
        return calculator.divide(num, secNum);
    }
}

function getTotalSum() {
    totalSum = operate(Number(firstNumber.innerHTML), Number(secondNumber.innerHTML), operator.innerHTML);
    firstNumber.innerHTML = totalSum;
    secondNumber.innerHTML = "";
    flag = false;
}