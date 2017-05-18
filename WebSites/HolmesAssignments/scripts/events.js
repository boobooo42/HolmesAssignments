//moveMouse = 

window.onload = setEventListeners;
function setEventListeners() {
   // window.onmouseover = moveMouse;
    window.addEventListener("Move mouse",moveMouse);
}

function moveMouse(event) {
    var mouseCoord = document.getElementById("mouseCoords");
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var coord = "x: " + mouseX + " y: " + mouseY;
    mouseCoord.innerHTML = coord;
}

var bdy = document.body;
bdy.onclick = function (e) {
    alert(e.target);
    alert(e.currentTarget);
}