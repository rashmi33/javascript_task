window.onload = function(){
document.getElementById("work-p").onmouseover = function() {mouseOver()};
document.getElementById("work-p").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("work-p").style.color = "red";
}

function mouseOut() {
    document.getElementById("work-p").style.color = "white";
}
}