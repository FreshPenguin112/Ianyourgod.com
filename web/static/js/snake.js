document.onkeydown = detectKey;
let dir = "";

function detectKey(e) {

    e = e || window.event;

    if (e.keyCode == '87') {
        dir = "up";
    }
    else if (e.keyCode == '83') {
        dir = "down";
    }
    else if (e.keyCode == '65') {
        dir = "left";
    }
    else if (e.keyCode == '68') {
        dir = "right";
    }
    

}

setInterval(function() {
    var posLeft = document.getElementById('head').offsetLeft;
    var posTop = document.getElementById('head').offsetTop;
    if (dir === "left") {
        document.getElementById('head').style.marginLeft  = (posLeft-22)+"px";
    } else if (dir === "right") {
        document.getElementById('head').style.marginLeft  = (posLeft+22)+"px";
    } else if (dir === "up") {
        document.getElementById('head').style.marginTop  = (posTop-22)+"px";
    } else if (dir === "down") {
        document.getElementById('head').style.marginTop  = (posTop+22)+"px";
    }
}, 750)