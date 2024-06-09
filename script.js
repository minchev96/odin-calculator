const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const operator = document.querySelector(".operator")
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const zeroButton = document.querySelector(".zero")
const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")


let totalSum = 0;
let flag = false;

zeroButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 0;
    else firstNumber.innerHTML += 0;
    
    if(Number(secondNumber.innerHTML) === 0) {
        secondNumber.innerHTML = "";
        alert("Can't divide by 0!!!")
    }
})
oneButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 1;
    else firstNumber.innerHTML += 1;
})
twoButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 2;
    else firstNumber.innerHTML += 2;
})
threeButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 3;
    else firstNumber.innerHTML += 3;
})
fourButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 4;
    else firstNumber.innerHTML += 4;
})
fiveButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 5;
    else firstNumber.innerHTML += 5;
})
sixButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 6;
    else firstNumber.innerHTML += 6;
})
sevenButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 7;
    else firstNumber.innerHTML += 7;
})
eightButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 8;
    else firstNumber.innerHTML += 8;
})
nineButton.addEventListener("click", () => {
    if(flag) secondNumber.innerHTML += 9;
    else firstNumber.innerHTML += 9;
})

addButton.addEventListener("click", () => {
    if(Number(firstNumber.innerHTML) > 0){
        operator.innerHTML = "+";
    }
    else alert("Add a value first!!!");
    
    if(flag) getTotalSum();
    flag = true;
})
subtractButton.addEventListener("click", () => {
    if(Number(firstNumber.innerHTML) > 0){
        operator.innerHTML = "-";
    }
    else alert("Add a value first!!!");
    
    if(flag) getTotalSum();
    flag = true;
})
multiplyButton.addEventListener("click", () => {
    if(Number(firstNumber.innerHTML) > 0){
        operator.innerHTML = "*";
    }
    else alert("Add a value first!!!");

    if(flag) getTotalSum();
    flag = true;
})
divideButton.addEventListener("click", () => {
    if(Number(firstNumber.innerHTML) > 0){
        operator.innerHTML = "/";
    }
    else alert("Add a value first!!!");
    
    if(flag) getTotalSum();
    flag = true;
})

equalButton.addEventListener("click", () => {
    if(!flag) alert("Error")
    
    else {
        getTotalSum();
        operator.innerHTML = "";
    }
})

clearButton.addEventListener("click", () => {
    totalSum = 0;
    flag = false;
    firstNumber.innerHTML = "";
})



function add (num, secNum) {
    return Number(num) + Number(secNum);
}

function subtract (num, secNum) {
    return Number(num) - Number(secNum);
}

function multiply (num, secNum) {
    return Number(num) * Number(secNum);
}

function divide (num, secNum) {
    return Number(num) / Number(secNum);
}

function operate (num, secNum, operator) {
    if(operator === "+"){
        return add(num, secNum);
    }
    if(operator === "-"){
        return subtract(num, secNum);
    }
    if(operator === "*"){
        return multiply(num, secNum);
    }
    if(operator === "/"){
        return divide(num, secNum);
    }
}

function getTotalSum() {
    totalSum = operate(Number(firstNumber.innerHTML), Number(secondNumber.innerHTML), operator.innerHTML);
    firstNumber.innerHTML = totalSum;
    secondNumber.innerHTML = "";
    flag = false;
}