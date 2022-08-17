let resultNumber = document.getElementById('result-number')

function inputNumber(number) {

    const str_number = number.toString();

    // when it's zero, we simply replace with the input number
    if (resultNumber.innerHTML === "0") {
        resultNumber.innerHTML = str_number;

    // otherwise, add to the preexisting numbers
    } else {
        resultNumber.innerHTML += str_number;
    }
}

function clearInput() {
    resultNumber.innerHTML = "0";
}

function callOperation(operation_type) {
    
}