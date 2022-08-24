let resultNumber = document.getElementById('result-number')

let inputArray = []
let operationType = ""
let operationFlag = false;

function inputNumber(number) {

    const str_number = number.toString();

    if (operationFlag) {
        resultNumber.innerHTML = "0";
        operationFlag = false;
    }

    // when it's zero, we simply replace with the input number
    if (resultNumber.innerHTML === "0") {
        resultNumber.innerHTML = str_number;

    // otherwise, add to the preexisting numbers
    } else {
        resultNumber.innerHTML += str_number;
    }
}

// When the AC button is clicked, clear the input and the array and operation types
function clearInput() {
    resultNumber.innerHTML = "0";
    inputArray = [];
    operationType = "";
}

function callOperation(operation_type) {

    if (operation_type === "=") {
        inputArray.push(parseInt(resultNumber.innerHTML))
        let result;
        if (operationType === "+") result = inputArray[0] + inputArray[1];
        if (operationType === "-") result = inputArray[0] - inputArray[1];
        if (operationType === "*") result = inputArray[0] * inputArray[1];
        if (operationType === "/") result = (inputArray[0] / inputArray[1]).toFixed(6);
        resultNumber.innerHTML = result.toString();
        return;
    }

    inputArray.push(parseInt(resultNumber.innerHTML))
    operationType = operation_type;
    operationFlag = true;

}