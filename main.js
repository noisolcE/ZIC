let btnEvent = document.getElementById('inCalc');
let handleClick;

btnEvent.addEventListener("click", handleClick = () => {

const dpFee = 25;
const sebonFee = 0.00015;

// Condition for which % capital gain is selected
let capitalGain; 
if(document.getElementById('cgSeven').checked) {
   capitalGain = document.getElementById('cgSeven').value;
} else {
    capitalGain = document.getElementById('cgFive').value;
}

// Calculations for the buying price
let buyPrice = parseInt(document.getElementById("inBuy").value);
let buyUnit = parseInt(document.getElementById("inBuyUnit").value);

let brokerBuyCom;
let buyI = buyPrice*buyUnit;

// Condition for broker commission when buying
if (buyI <= 50000) {
    brokerBuyCom = 0.004;
} else if (buyI > 50000 && buyI <= 500000) {
    brokerBuyCom = 0.0037;
} else if (buyI > 500000 && buyI <= 2000000) {
    brokerBuyCom = 0.0034;
} else if (buyI > 2000000 && buyI <= 10000000) {
    brokerBuyCom = 0.0030;
} else {
    brokerBuyCom = 0.0027;
}

// Calculations for the selling price
let sellPrice = parseInt(document.getElementById("inSell").value);
let sellUnit = parseInt(document.getElementById("inSellUnit").value);
let brokerSellCom;
let sellI = sellPrice*sellUnit;

// Condition for broker commission when selling
if (sellI <= 50000) {
    brokerSellCom = 0.004;
} else if (sellI > 50000 && sellI <= 500000) {
    brokerSellCom = 0.0037;
} else if (sellI > 500000 && sellI <= 2000000) {
    brokerSellCom = 0.0034;
} else if (sellI > 2000000 && sellI <= 10000000) {
    brokerSellCom = 0.0030;
} else {
    brokerSellCom = 0.0027;
}

let buyFinal = buyI + dpFee + (buyI*sebonFee) + (buyI*brokerBuyCom);
let sellFinal = sellI - dpFee - (sellI*sebonFee) - (sellI*brokerSellCom);
let finalAmount;

if (sellFinal >= buyFinal) {
    document.getElementById('profitLoss').innerHTML = "Profit";
    document.getElementById('descLoss').style.color = "#26a69a";
    document.getElementById('profitLoss').style.color = "#26a69a";
    document.getElementById('descCapGain').innerHTML = "Rs " + ((sellFinal-buyFinal)*capitalGain).toFixed(2);
    finalAmount = sellFinal - ((sellFinal-buyFinal)*capitalGain);
} else {
    document.getElementById('profitLoss').innerHTML = "Loss"
    document.getElementById('descLoss').style.color = "#ef5350";
    document.getElementById('profitLoss').style.color = "#ef5350";
    document.getElementById('descCapGain').innerHTML = "Rs 0";
    finalAmount = sellFinal;
}

    document.getElementById('descSebon').innerHTML = "Rs "+ ((buyI*sebonFee) + (sellI*sebonFee)).toFixed(2);
    document.getElementById('descLoss').innerHTML = "Rs "+ (finalAmount-buyFinal).toFixed(2);
    document.getElementById('descBrokerCom').innerHTML = "Rs " + ((buyI*brokerBuyCom) + (sellI*brokerSellCom)).toFixed(2);
    document.getElementById('descPayAmt').innerHTML = "Rs " + (buyFinal).toFixed(2);
    document.getElementById('descRecAmt').innerHTML = "Rs " + finalAmount.toFixed(2);

if (sellUnit>buyUnit) {
    document.getElementById('warnUnit').innerHTML = "You are selling more units than you are buying!"
} else {
    document.getElementById('warnUnit').innerHTML = "&nbsp;"
}


})

