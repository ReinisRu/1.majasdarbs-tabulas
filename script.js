
// piemērs no W3

document.getElementsByClassName("con-5").ontouchstart = animateBlowOut;

function animateBlowOut(event) {
    event.preventDefault();
    var element = document.getElementsByClassName("con-5. .fill-cont");
    element.classList.toggle("touch");
}

// function animateBlowOut() {
//     var element = document.getElementsByClassName("con-5. .fill-cont");
//     element.classList.toggle("touch");
// }