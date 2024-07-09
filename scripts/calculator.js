function input(x) {
    if (document.getElementById('result').value == 0) { // This checks the 0 and gets rid of it when entering a number fo rthe first time
        document.getElementById('result').value = x;
    } else {
        document.getElementById('result').value += x;
    }
}

function operator(x) {
    switch(x) {
        case 1: 
            document.getElementById('operation').value = 1; // addition
            break;
        case 2:
            document.getElementById('operation').value = 2; // subtraction
            break;
        case 3:
            document.getElementById('operation').value = 3; // multiplication
            break;
        case 4:
            document.getElementById('operation').value = 4; // division
            break;
        default:
    }
}

function allClear() {
    document.getElementById('result').value = 0;
}

function plusMinus() {
    let x = parseFloat(document.getElementById('result').value);
    x *= -1;
    document.getElementById('result').value = x;
}

function percent() {
    let x = parseFloat(document.getElementById('result').value);
    x *= 0.01;
    document.getElementById('result').value = x;
}

function square() {
    let x = parseFloat(document.getElementById('result').value);
    x *= x;
    document.getElementById('result').value = x;
}