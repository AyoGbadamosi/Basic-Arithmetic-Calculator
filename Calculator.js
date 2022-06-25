function performMathoperation(num1, num2, operator){
    if (operator === '+'){
        return a + b;
    }
    else if (operator === '-'){
        return a - b;
    }
    else if (operator === '*'){
        return a * b;
    }
    else if (operator === '/'){
        return a / b;
    }
    else{
        window.alert("please enter a valid operator +-*/");
    }
}

let a = parseInt(prompt("Enter a number"));
console.log(a);
let operator = prompt("Enter an operator", "+-*/");
console.log(operator);
let b = parseInt(prompt("Enter a number"));
console.log(b);
let result = performMathoperation(a, b, operator);
alert(result);
console.log(result);