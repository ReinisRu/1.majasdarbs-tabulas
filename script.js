document.getElementById("cont-start").ontouchstart = animateStart;
function animateStart() {
    document.getElementsByClassName("center-out").classList.toggle("animation");
}
document.getElementById("cont-1").ontouchstart = animate1;
function animate1() {
    document.getElementsByClassName("left-right").classList.toggle("animation");
}
document.getElementById("cont-2").ontouchstart = animate2;
function animate2() {
    document.getElementsByClassName("top-down").classList.toggle("animation");
}
document.getElementById("cont-3").ontouchstart = animate3;
function animate3() {
    document.getElementsByClassName("right-left").classList.toggle("animation");
}
document.getElementById("cont-4").ontouchstart = animate4;
function animate4() {
    document.getElementsByClassName("bottom-up").classList.toggle("animation");
}
document.getElementById("cont-5").ontouchstart = animate5;
function animate5() {
    document.getElementsByClassName("blow-out").classList.toggle("animation");
}
document.getElementById("cont-finish").ontouchstart = animateFinish;
function animateFinish() {
    document.getElementsByClassName("to-right").classList.toggle("animation");
}

// document.getElementById("text-5").ontouchend = animate5remove;
// function animate5remove() {
//   document.getElementsByClassName("blow-out").classList.remove("animate");
// }
// variants 1 

// document.getElementsByClassName("con-5").ontouchstart = animateBlowOut;

// function animateBlowOut(event) {
//     event.preventDefault();
//     var element = document.getElementsByClassName("con-5. .fill-cont");
//     element.classList.toggle("touch");
// }

// variants 2 

// function animateBlowOut() {
//     var element = document.getElementsByClassName("con-5. .fill-cont");
//     element.classList.toggle("touch");
// }