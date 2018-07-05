
var min = 0;
var max = 255;


function setbackground()
{
    window.setTimeout( "setbackground()", 80); //  milliseconds delay

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        ColorValue = "66FF33"; 
    if(index == 2)
        ColorValue = "FF0000"; 
    if(index == 3)
        ColorValue = "FF00FF"; 
    if(index == 4)
        ColorValue = "0000FF"; 
    if(index == 5)
        ColorValue = "00FFFF"; 
    if(index == 6)
        ColorValue = "FFFF00"; 
    if(index == 7)
       ColorValue = "CC66FF"; 
    if(index == 8)
        ColorValue = "3366FF"; 
   if(index == 9)
        ColorValue = "CCCCCC"; 

   document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}

function setbackgroundTitle()
{
    window.setTimeout( "setbackgroundTitle()", 600); //  milliseconds delay

    var index = Math.round(Math.random() * 4);

    var ColorValue = "FFFFFF"; // default color - white (index = 0)

    if(index == 1)
        ColorValue = "66FF33"; 
    if(index == 2)
        ColorValue = "FF0000"; 
    if(index == 3)
        ColorValue = "FF00FF"; 
    if(index == 4)
        ColorValue = "0000FF"; 


    document.getElementById("title")[0].style.backgroundColor = "#" + ColorValue;

}


var Canvas = document.getElementById("button-1");
var ctx = Canvas.getContext("2d");

var startAngle = (2*Math.PI);
var endAngle = (Math.PI*1.5);
var currentAngle = 0;

var raf = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

function Update(){
    //Clears
    ctx.clearRect(0,0,Canvas.width,Canvas.height);

    //Drawing
    ctx.beginPath();                  
    ctx.arc(40, 40, 30, startAngle + currentAngle, endAngle + currentAngle, false);

    ctx.strokeStyle = "orange";
    ctx.lineWidth = 11.0;
    ctx.stroke();

    currentAngle += 0.02;
    document.getElementById("angle").innerHTML=currentAngle;
    raf(Update);
}
raf(Update);