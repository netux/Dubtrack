$("head").append('<style src="https://rawgit.com/Netox005/Test/master/dubtrack.css"/>');

var mousePress = false;
var dragVideoEvent = function() {
    if(!mousePress) return;
    console.log("test");
}
$(".left_section").onmousemove(dragVideoEvent);
$(".left_section").onmousedown(function() { mousePress = true; });
$(".left_section").onmouseup(function() { mousePress = false; });
