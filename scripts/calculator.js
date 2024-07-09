function input(x) {
    if (document.getElementById('result').value == 0) { // This checks the 0 and gets rid of it when entering a number fo rthe first time
        document.getElementById('result').value = x;
    } else {
        document.getElementById('result').value += x;
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