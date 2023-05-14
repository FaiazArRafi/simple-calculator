const inputField = document.getElementById('input-field');

// show numbers and operators on display
function showOnDisplay(value) {
    inputField.value += value;
}

// clear display
document.getElementById('del').addEventListener('click', function () {
    inputField.value = '';
})


// calculate button 
function calculate() {
    const inputValue = inputField.value;
    const operators = ['+', '-', '*', '/','%'];

    // after finding the operator and split the string into two parts
    let operatorIndex = -1;
    let operator = '';

    for (let i = 0; i < operators.length; i++) {
        const index = inputValue.indexOf(operators[i]);
        if (index !== -1) {
            operatorIndex = index;
            operator = operators[i];
            break;
        }
    }

    if (operatorIndex === -1) {
        // if no operator found, clear the display
        inputField.value = '';
        return;
    }

    const numbersBeforeOperator = parseFloat(inputValue.slice(0, operatorIndex));
    const numbersAfterOperator = parseFloat(inputValue.slice(operatorIndex + 1));
    let result;

    // action per operator
    if (operator === '+') {
        result = numbersBeforeOperator + numbersAfterOperator;
    }
    else if (operator === '-') {
        result = numbersBeforeOperator - numbersAfterOperator;
    }
    else if (operator === '*') {
        result = numbersBeforeOperator * numbersAfterOperator;
    }
    else if (operator === '/') {
        result = numbersBeforeOperator / numbersAfterOperator;
    }
    else if (operator === '%') {
        result = (numbersBeforeOperator * numbersAfterOperator) / 100;
    }

    // Display the result
    inputField.value = result;
}

