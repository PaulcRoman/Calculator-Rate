const amnt = document.querySelector(".sum");
const sum = document.querySelector(".sumResult");
const perc = document.querySelector(".resultPer");
const period = document.querySelector(".month");
const time = document.querySelector(".luna")
const procentaj = document.querySelector(".procent")

amnt.addEventListener("input", amount);

let val;

function amount() {
    val = Number(amnt.value);
    console.log(typeof val);
    sum.innerHTML = val;
    perc.innerHTML = (val * 10)/100 + val;
    periodResult();
   
}

period.addEventListener("input",periodResult);

function periodResult() {
    let result = Number(period.value);
    console.log(result);
    time.innerHTML = result;
    if (result >=6 && result <= 12 ) {
        perc.innerHTML =  (val * 9.5)/100 + val;
    }else if(result >=12 && result <=18){
        perc.innerHTML = (val * 9)/100 + val;
    }else if (result >= 18 && result <=24) {
        perc.innerHTML = (val * 8.5)/100 +val;
    }
    percentaget();
}
function percentaget() {
    let result = Number(period.value);
    console.log(result);
    time.innerHTML = result;
    if (result >0 && result < 6) {
        procentaj.innerHTML = 10
    }else if (result >=6 && result <= 12 ) {
        procentaj.innerHTML =   9.5;
    }else if(result >=12 && result <=18){
        procentaj.innerHTML = 9;
    }else if (result >= 18 && result <=24) {
        procentaj.innerHTML = 8.5;
    }else{
        procentaj.innerHTML = 0;
    }
}
