document.onkeydown = detectKey;

function detectKey(e) {

    var posLeft = document.getElementById('p1').offsetLeft;
    var posTop = document.getElementById('p1').offsetTop;

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('p1').style.marginTop  = (posTop-58)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('p1').style.marginTop  = (posTop+58)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('p1').style.marginLeft  = (posLeft-58)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('p1').style.marginLeft  = (posLeft+58)+"px";
    }

    var posLeft = document.getElementById('p2').offsetLeft;
    var posTop = document.getElementById('p2').offsetTop;

    if (e.keyCode == '87') {
        // up arrow
        document.getElementById('p2').style.marginTop  = (posTop-58)+"px";
    }
    else if (e.keyCode == '83') {
        // down arrow
        document.getElementById('p2').style.marginTop  = (posTop+58)+"px";
    }
    else if (e.keyCode == '65') {
       // left arrow
        document.getElementById('p2').style.marginLeft  = (posLeft-58)+"px";
    }
    else if (e.keyCode == '68') {
       // right arrow
        document.getElementById('p2').style.marginLeft  = (posLeft+58)+"px";
    }
    

}