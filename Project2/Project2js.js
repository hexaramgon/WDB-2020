var calcoutput = 0;
var counter = 1;
let holder = 0;

function buttonpressed(numb) {
    calcoutput = calcoutput * 10 + numb;
    document.getElementById("inputarea").innerHTML = calcoutput;
}

function Clear() {
    calcoutput = 0;
    document.getElementById("inputarea").innerHTML = 0;
}

function backspace() {
    calcoutput = (calcoutput - (calcoutput % 10))/ 10;
    document.getElementById("inputarea").innerHTML = calcoutput;
}

function add() {
    holder = calcoutput;

}
switch(action) {
    case mult:
        calcoutput
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