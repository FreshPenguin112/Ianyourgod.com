function setimg(thing,path) {
    new Audio("static/audios/button_press.wav").play();
    thing.src = path;
}
console.log("clicker.js set up");