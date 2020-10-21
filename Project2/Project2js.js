var calcoutput = 0;
var counter = 1;
var buffer;
var operationdo;
var resulted = false;

function buttonpressed(numb) {
    if (resulted == true && operationdo == null) {
        console.log("yes!")
        Clear();
        resulted = false;
    }
    if (calcoutput > 999999999999) {
        return;
    }
    updateoutput(calcoutput * 10 + numb)
}

function updateoutput(num) {
    if (num < 100000000)
    num = Math.round(num * 100000000) / 100000000;
    calcoutput = num;
    document.getElementById("inputarea").innerHTML = calcoutput;
}

function Clear() {
    buffer = null;
    operationdo = null;
    updateoutput(0);
}

function backspace() {
    updateoutput((calcoutput - (calcoutput % 10))/ 10)
}

function unconventional_mathcheck() {
    if (buffer != null) {
        buffer = operationdo(calcoutput, buffer);
        updateoutput(0);
        return true;
    }
}

function math(operation) {
    switch (operation) {
        case "plus":
            if (unconventional_mathcheck()) {
                operationdo = (a, b) => a + b;
                break;
            }
            buffer = calcoutput;
            updateoutput(0);
            operationdo = (a, b) => a + b;
            break;
        case "mult":
            if (unconventional_mathcheck()) {
                operationdo = (a, b) => a * b;
                break;
            }
            buffer = calcoutput;
            updateoutput(0);
            operationdo = (a, b) => a * b;
            break;
        case "minus":
            if (unconventional_mathcheck()) {
                operationdo = (a, b) => b - a;
                break;
            }
            buffer = calcoutput;
            updateoutput(0);
            operationdo = (a, b) => b - a;
            break;
        case "divide":
            if (unconventional_mathcheck()) {
                operationdo = (a, b) => b / a;
                break;
            }
            buffer = calcoutput;
            updateoutput(0);
            operationdo = (a, b) => b / a;
            break;
        case "equals":
            if (operationdo === null) {
                return;
            }
            console.log(operationdo);
            let result = operationdo(calcoutput, buffer);
            buffer = null;
            updateoutput(result);
            resulted = true;
            break;
    }
}

function wdbmode() {
    if (counter == 1) {
        let sheet = "Project2style.css";
        document.getElementById("pagestyle").setAttribute("href", sheet);
        counter = counter * -1
    }
    else {
        let sheet = "default.css"
        document.getElementById("pagestyle").setAttribute("href", sheet);
        counter = counter * -1
    }
}
