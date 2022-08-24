let clicks = 0;
let clickam = 1;
let clcprice = 50;
let priceprice = 10;
let presser_price = 100;
let pressers = 0;
function setimg(thing,path) {
    thing.src = path;
}
function addClickam(thing,am) {
    if (clicks >= clcprice*am) {
        console.log()
        clickam += am;
        priceprice += 3;
        clicks -= clcprice*am;
        clcprice += priceprice;
        document.getElementById("click-counter").innerHTML = clicks +" Clicks!";
        thing.innerHTML = 'Per click +' + am + " (cost " + clcprice*am + ")"
    } else {
        console.log(clicks, clcprice*am - 2*am)
    }
}
function buyPresser(thing,multi) {
    if (clicks >= presser_price*multi) {
        clicks -= presser_price*multi
        presser_price = Math.round(presser_price * (1.15 * multi))
        pressers += multi
    }
}

function bclc() {
    clicks += clickam;
    console.log(clicks);
    new Audio("static/audios/button_pressloud.wav").play();
    document.getElementById("click-counter").innerHTML = clicks + " Clicks!";
}

function hakr() {
    clicks += 9999999999
    clickam += 9999999999
}

setInterval(function() {
    clicks += 2 * pressers;
}, 1000)

setInterval(function() {
    document.getElementById("click-counter").innerHTML = clicks + " Clicks!";
}, 1)

console.log("clicker.js set up");